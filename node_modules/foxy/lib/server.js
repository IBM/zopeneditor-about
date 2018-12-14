"use strict";

var utils     = require("./utils");
var respMod   = require("resp-modifier");
var connect   = require("connect");
var httpProxy = require("http-proxy");

module.exports = function (config) {

    /**
     * Connect app for middleware stacking.
     */
    var app = connect();

    /**
     * Proxy server for final requests
     */
    var proxy = httpProxy.createProxyServer(config.get("proxyOptions").merge({
        target: config.get("target"),
        headers: config.get("reqHeaders")(config.toJS())
    }).toJS());

    /**
     * Proxy errors out to user errHandler
     */
    proxy.on("error", config.get("errHandler"));

    /**
     * Modify the proxy response
     */
    proxy.on("proxyRes", utils.proxyRes(config));

    /**
     * Handle `upgrade` event to proxy WebSockets
     * https://github.com/nodejitsu/node-http-proxy#proxying-websockets
     */
    app.handleUpgrade = function (req, socket, head) {
        proxy.ws(req, socket, head);
    };

    /**
     * Push the final handler onto the mw stack
     */
    app.stack.push({route: "", id: "foxy-resp-mod", handle: finalhandler});

    /**
     * Intercept regular .use() calls to
     * ensure final handler is always called
     * @param path
     * @param fn
     * @param opts
     */
    var mwCount = 0;

    app.use = function (path, fn, opts) {

        opts = opts || {};

        if (typeof path !== "string") {
            fn = path;
            path = "";
        }

        if (path === "*") {
            path = "";
        }

        if (!opts.id) {
            opts.id = "foxy-mw-" + (mwCount += 1);
        }

        // Never override final handler
        app.stack.splice(app.stack.length - 1, 0, {
            route: path,
            handle: fn,
            id: opts.id
        });
    };

    /**
     * Final handler - give the request to the proxy
     * and cope with link re-writing
     * @param req
     * @param res
     */
    function finalhandler (req, res) {

        /**
         * Rewrite the links
         */
        respMod({
            rules: utils.getRules(config, req.headers.host),
            blacklist:  config.get("blacklist").toJS(),
            whitelist:  config.get("whitelist").toJS()
        })(req, res, function () {
            /**
             * Pass the request off to http-proxy now that
             * all middlewares are done.
             */
            proxy.web(req, res);
        });
    }

    return app;
};
