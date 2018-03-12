var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: path.join(__dirname, '/client/src/app.jsx'),
  output: {
    path: path.join(__dirname, '/server/static/js'),
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        include: [
          path.join(__dirname, '/client/src/'),
        ],
        loader: "eslint-loader",
        options: {
          fix: true
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'es2016', 'es2017', 'react']
        }
      }
    ]
  },
  plugins: [
    // new WebpackNotifierPlugin(),
    new LiveReloadPlugin({ appendScriptTag: true }),
  ],
  watch: true
};
