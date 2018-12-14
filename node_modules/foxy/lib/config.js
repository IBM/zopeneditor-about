"use strict";

var Immutable = require("immutable");
var url       = require("url");

var utils     = require("./utils");
var errors    = require("./errors");

var defaults = Immutable.fromJS({
    /**
     * Error handler for proxy server.
     */
    errHandler: errors,
    /**
     * White-list for paths to open to middleware
     */
    whitelist: [],
    /**
     * Black-list for paths to open to middleware
     */
    blacklist: [],
    /**
     * Cookie options
     */
    cookies: {
        /**
         * Strip the domain attribute from cookies
         * This is `true` by default to help with logins etc
         */
        stripDomain: true
    },
    /**
     * Default req headers
     * @param config
     * @returns {{host: string, accept-encoding: string, agent: boolean}}
     */
    reqHeaders: function (config) {
        return {
            "host":            config.urlObj.host,
            "accept-encoding": "identity", // disable any compression
            "agent":           false
        };
    },
    /**
     * Serve any static files here
     */
    staticFiles: {},
    /**
     *
     */
    middleware: [],
    /**
     * Proxy Options.
     */
    proxyOptions: {
        xfwd: false,
        headers: {},
        target: "",
        // secure: false - This forces http-proxy to set rejectUnauthorized: false which allows self-signed certs
        // which we are fine with considering this is a development tool, not to be used in production. :)
        secure:  false,
        ws: true
    }
});

/**
 * @param {String} target - a url such as http://www.bbc.co.uk or http://localhost:8181
 * @param {Object} [userConfig]
 * @returns {Immutable.Map}
 */
module.exports = function (target, userConfig) {

    // Merge defaults with user config
    // + add extra needed config options

    return defaults
        .mergeDeep(userConfig || {})
        .withMutations(function (item) {

            var urlObj  = url.parse(target);
            var _target = urlObj.protocol + "//" + urlObj.hostname;

            item.set("urlObj", urlObj);
            item.set("hostHeader", utils.getProxyHost(urlObj));

            // make sure target has port if set
            if (urlObj.port) {
                _target = _target + ":" + urlObj.port;
            }

            item.set("target", _target);

            var mw = item.get("middleware");

            if (typeof mw === "function") {
                item.set("middleware", Immutable.List([mw]));
            }

            item.set("middleware", item.get("middleware").concat([utils.handleIe]));

            return item;
        });
};
