'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    require.resolve('react-dev-utils/webpackHotDevClient'),
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'scripts/bundle.[hash].js',
    chunkFilename: 'scripts/vendors.[chunkhash].js',
    publicPath: '/'
  },
  devServer: {
    open: true,
    http2: true,
    disableHostCheck: true,
    historyApiFallback: true,
    contentBase: './src',
    compress: true,
    hot: true,
    port: 3000,
    proxy: {
      '/api': 'http://localhost:5000',
      secure: false
    }
  },
  // Disable performance hints for unminifed code
  performance: {
    hints: false
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
