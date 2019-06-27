const webpackMerge = require('webpack-merge');
const commonConfig = require('./config/webpack.common.js');

const target = process.env.NODE_ENV;

module.exports = () => {
  const envConfig = require(`./config/webpack.${target}.js`);

  return webpackMerge(commonConfig, envConfig);
};
