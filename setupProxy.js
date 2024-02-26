const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api', // Specify the endpoint you want to proxy
        createProxyMiddleware({
            target: 'http://localhost:9090', // Specify the target server URL
            changeOrigin: true,
        })
    );
};