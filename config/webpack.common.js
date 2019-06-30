'use strict';

const path = require('path');
const webpack = require('webpack');
const globImporter = require('node-sass-glob-importer');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const formatterPretty = require('eslint-formatter-pretty');

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/,
        exclude: /(node_modules)/,
        loader: 'file-loader',
        options: {
          name: './img/[name].[ext]'
        }
      },
      {
        test: /\.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: /(node_modules)/,
        loader: 'url-loader?limit=100000',
        options: {
          name: './fonts/[name].[ext]'
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'eslint-loader',
        options: {
          fix: true,
          formatter: formatterPretty
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-loader',
            options: {
              importer: globImporter()
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlPlugin({
      template: 'src/index.html'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};
