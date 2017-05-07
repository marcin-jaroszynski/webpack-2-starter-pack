var baseConfig = require('./webpack.base.config');
var merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge.smart(baseConfig, {
  plugins: [
      new UglifyJSPlugin(),
      new HtmlWebpackPlugin({
        filename: 'dist/index.html',
        template: 'src/index.html'
      })
  ]
});