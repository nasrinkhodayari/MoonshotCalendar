const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  const env = process.env.NODE_ENV;
  const dev = env !== 'production';
  if (dev) {
    app.use(
      ['/2.2.0'],
      createProxyMiddleware({
        target: 'http://lldev.thespacedevs.com',
        changeOrigin: true,
      })
    );
  }
};
