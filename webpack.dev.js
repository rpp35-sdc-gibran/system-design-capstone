require('dotenv').config();
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
      hot: true,
      static: DIST_DIR,
      allowedHosts: 'auto',
      port: 3000,
      proxy: {
         '/api': {
            //rewrites request calls to /api/dest, so all requests to server must be made to /api/dest
            target: 'http://localhost:8080',
            pathRewrite: { '^/api': '' },
         },
      },
   },
});
