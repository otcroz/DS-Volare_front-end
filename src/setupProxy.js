const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/spring', {
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: { '^/spring': '/' },
    })
  );
  app.use(
    createProxyMiddleware('/flask', {
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: { '^/flask': '/' },
    })
  );
};
