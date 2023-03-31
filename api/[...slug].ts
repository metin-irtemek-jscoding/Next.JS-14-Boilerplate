import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default createProxyMiddleware({
  target: process.env.BASE_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '',
  },
});
