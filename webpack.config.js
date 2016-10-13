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
      'system': getPath('dev/js/system')
    },
    output: {
      path: getPath('dist/js/'),
      filename: '[name].js'
    }
  }
];