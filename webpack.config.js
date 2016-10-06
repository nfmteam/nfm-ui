'use strict';

var path = require('path');

function getPath(jsPath) {
  return path.join(__dirname, jsPath);
}

module.exports = [
  // index
  {
    entry: {
      'index': getPath('dev/js/index')
    },
    output: {
      path: getPath('dist/js/'),
      filename: '[name].js'
    }
  },

  // load
  {
    entry: {
      'load': getPath('dev/js/load')
    },
    output: {
      path: getPath('dist/js/'),
      filename: '[name].js'
    }
  }
];