'use strict';

const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'scripts/bundle.[hash].js',
    chunkFilename: 'scripts/vendors.[chunkhash].js',
    publicPath: 'public'
  },
  performance: {
    hints: 'warning'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        extractComments: true,
        terserOptions: {
          safari10: true
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    //{ from: 'from', to: 'to' },
    new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]),
    new webpack.HashedModuleIdsPlugin()
  ]
};
