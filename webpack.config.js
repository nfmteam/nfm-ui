'use strict';

var path = require('path');

function getPath(jsPath) {
  return path.join(__dirname, jsPath);
}

module.exports = [
  {
    entry: {
      'index': getPath('dev/js/index'),
      'statistic': getPath('dev/js/statistic'),
      'initialize': getPath('dev/js/initialize')
    },
    output: {
      path: getPath('dist/js/'),
      filename: '[name].js'
    }
  }
];