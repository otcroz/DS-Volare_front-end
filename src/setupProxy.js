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
      target: 'http://75.63.212.250:44809',
      changeOrigin: true,
      pathRewrite: { '^/flask': '/' },
    })
  );
};
