"use strict";

var minimatch = require("minimatch");

module.exports = function (opts) {

    // options
    opts = opts || {};

    var defaultIgnoreTypes = [
            // text files
            "js", "json", "css",
            // image files
            "png", "jpg", "jpeg", "gif", "ico", "tif", "tiff", "bmp", "webp", "psd",
            // vector & font
            "svg", "woff", "ttf", "otf", "eot", "eps", "ps", "ai",
            // audio
            "mp3", "wav", "aac", "m4a", "m3u", "mid", "wma",
            // video & other media
            "mpg", "mpeg", "mp4", "m4v", "webm", "swf", "flv", "avi", "mov", "wmv",
            // document files
            "pdf", "doc", "docx", "xls", "xlsx", "pps", "ppt", "pptx", "odt", "ods", "odp", "pages", "key", "rtf", "txt", "csv",
            // data files
            "zip", "rar", "tar", "gz", "xml", "app", "exe", "jar", "dmg", "pkg", "iso"
        ].map(function(ext) { return "\\." + ext  + "(\\?.*)?$"; });

    var ignore     = opts.ignore || opts.excludeList || defaultIgnoreTypes;

    var blacklist  = toArray(opts.blacklist) || [];
    var whitelist  = toArray(opts.whitelist) || [];

    var rules = opts.rules || [];

    // helper functions
    var regex = (function() {
        var matches = rules.map(function(item) {
            return item.match.source;
        }).join("|");
        return new RegExp(matches);
    })();

    function toArray(item) {
        if (!item) {
            return item;
        }
        if (!Array.isArray(item)) {
            return [item];
        }
        return item;
    }

    function isHtml(str) {
        if (!str) {
            return false;
        }
        // Test to see if start of file contents matches:
        // - Optional byte-order mark (BOM)
        // - Zero or more spaces
        // - Any sort of HTML tag, comment, or doctype tag (basically, <...>)
        return /^(\uFEFF|\uFFFE)?\s*<[^>]+>/i.test(str);
    }

    function exists(body) {
        if (!body) {
            return false;
        }
        return regex.test(body);
    }

    function snip(body) {
        if (!body) {
            return false;
        }
    }

    function overwriteBody(body) {
        var _body = body;
        rules.forEach(function(rule) {
            if (rule.match.test(body)) {
                _body = _body.replace(rule.match, function(w) {
                    return rule.fn(w);
                });
                return true;
            }
            return false;
        });
        return _body;
    }

    /**
     * @param req
     * @returns {*}
     */
    function hasAcceptHeaders(req) {
        var ha = req.headers["accept"];
        if (!ha) {
            return false;
        }
        return (~ha.indexOf("html"));
    }

    /**
     * Determine if a response should be overwritten
     * @param url
     * @returns {boolean}
     */
    function inBlackList(url) {

        // First check for an exact match
        if (!url || blacklist.indexOf(url) > -1) {
            return true;
        }

        if (url.length === 1 && url === "/") {
            return false;
        }

        // second, check that the URL does not contain a
        // file extension that should be ignored by default
        if (ignore.some(function (pattern) {
            return new RegExp(pattern).test(url);
        })) {
            return true;
        }

        // Finally, check any mini-match patterns for paths that have been excluded
        if (blacklist.some(function (pattern) {
            return minimatch(url, pattern);
        })) {
            return true;
        }

        return false;
    }

    /**
     * Check if a URL was white-listed
     * @param url
     * @returns {boolean}
     */
    function isWhitelisted (url) {

        if (whitelist.indexOf(url) > -1) {
            return true;
        }

        return whitelist.some(function (pattern) {
            return minimatch(url, pattern);
        });
    }

    /**
     * Middleware
     */
    return function respModifier(req, res, next) {

        if (res._respModifier) {
            return next();
        }

        res._respModifier = true;

        var writeHead = res.writeHead;
        var write = res.write;
        var end = res.end;

        if (isWhitelisted(req.url)) {
            modifyResponse();
        } else {
            if (!hasAcceptHeaders(req) || inBlackList(req.url)) {
                return next();
            } else {
                modifyResponse();
            }
        }

        next();

        function modifyResponse() {

            req.headers["accept-encoding"] = "identity";

            function restore() {
                res.writeHead = writeHead;
                res.write = write;
                res.end = end;
            }

            res.push = function(chunk) {
                res.data = (res.data || "") + chunk;
            };

            res.inject = res.write = function(string, encoding) {
                if (string !== undefined) {
                    var body = string instanceof Buffer ? string.toString(encoding) : string;
                    if (isHtml(body) || isHtml(res.data)) {
                        if (exists(body) && !snip(res.data)) {
                            var newString = overwriteBody(body);
                            res.push(newString);
                        } else {
                            res.push(body);
                        }
                        return true;
                    } else {
                        restore();
                        return write.call(res, string, encoding);
                    }
                }
                return true;
            };

            res.writeHead = function() {
                var headers = arguments[arguments.length - 1];
                if (headers && typeof headers === "object") {
                    for (var name in headers) {
                        if (/content-length/i.test(name)) {
                            delete headers[name];
                        }
                    }
                }

                var header = res.getHeader( "content-length" );
                if ( header ) {
                    res.removeHeader( "content-length" );
                }

                writeHead.apply(res, arguments);
            };

            res.end = function(string, encoding) {

                restore();

                var result = res.inject(string, encoding);

                if (!result) {
                    return end.call(res, string, encoding);
                }

                if (res.data !== undefined && !res._header) {
                    res.setHeader("content-length", Buffer.byteLength(res.data, encoding));
                }

                res.end(res.data, encoding);
            };
        }
    };
};
