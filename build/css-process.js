'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const CleanCSS = require('clean-css');

const options = {
  keepSpecialComments: 0,
  compatibility: 'ie7',
  rebase: false
};

glob('docs/css/**/*.css', {
  ignore: 'docs/css/libs/**/*'
}, function (error, files) {
  if (error) {
    throw error;
  }

  var minified,
    timestamp = Date.now(),
    absFilePath;

  files.forEach(file => {
    minified = new CleanCSS(options).minify([file]).styles;

    // 图片添加版本号
    minified = minified.replace(/url\(([^)]+)\)/g, 'url($1?v=' + timestamp + ')');

    absFilePath = path.join(process.cwd(), file);
    fs.writeFileSync(absFilePath, minified);
  });
});