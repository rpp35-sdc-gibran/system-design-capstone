const path = require('path');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
   entry: `${path.join(__dirname, '/client/src')}/index.jsx`,
   output: {
      filename: 'bundle.js',
      path: DIST_DIR,
      publicPath: '/',
   },
   module: {
      rules: [
         {
            //enables webpack to handle jsx files
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
         {
            //enables webpack to handle css files
            test: /\.css$/i,
            // exclude: /node_modules/,
            use: ['style-loader', 'css-loader'],
         },
         {
            //enables webpack to handle scss files
            test: /\.s[ac]ss$/i,
            use: [
               // Creates `style` nodes from JS strings
               'style-loader',
               // Translates CSS into CommonJS
               'css-loader',
               // Compiles Sass to CSS
               'sass-loader',
            ],
         },
         {
            //enables webpack to handle images
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
      ],
   },
};
