const webpackMerge = require('webpack-merge');
const commonConfig = require('./config/webpack.common.js');

const target = process.env.NODE_ENV;

module.exports = () => {
  /* eslint-disable */
  const envConfig = require(`./config/webpack.${target}.js`);
  /* eslint-enable */

  return webpackMerge(commonConfig, envConfig);
};
