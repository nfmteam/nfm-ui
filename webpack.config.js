'use strict';

const path = require('path');
const webpack = require('webpack');

function getPath(jsPath) {
  return path.join(__dirname, jsPath);
}

var config = {
  entry: {
    'index': getPath('dev/js/index'),
    'statistic': getPath('dev/js/statistic'),
    'system': getPath('dev/js/system')
  },
  output: {
    path: getPath('docs/script/'),
    filename: '[name].js'
  }
};

if (process.env.NODE_ENV !== 'docs') {
  config.devtool = 'eval-cheap-module-source-map';
} else {
  let uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  });

  config.plugins = config.plugins
    ? config.plugins.concat([
      uglifyJsPlugin
    ])
    : [uglifyJsPlugin];
}

module.exports = config;