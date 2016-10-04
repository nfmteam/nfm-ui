'use strict';

// 手动取stylelint-config-standard的rules
const standardRules = require('stylelint-config-standard');

// 删除no-missing-end-of-source-newline规则，pcss文件末尾不加空行
delete standardRules.rules['no-missing-end-of-source-newline'];

// 自定义规则
const customRules = {
  'rules': {
    'at-rule-empty-line-before': ['always', {
      except: [
        'blockless-after-same-name-blockless',
        'first-nested'
      ],
      ignore: ['after-comment'],
    }],
    'block-opening-brace-space-before': 'always',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-empty-line-before': 'never',
    'indentation': 2,
    'rule-nested-empty-line-before': ['always-multi-line', {
      except: ['first-nested']
    }],
    'rule-non-nested-empty-line-before': ['always', {
      except: ['after-single-line-comment'],
      ignore: ['after-comment'],
    }],
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-pseudo-element-colon-notation': 'single',
    'number-leading-zero': 'never',
    'max-empty-lines': 2
  }
};

// 自定义规则合并到stylelint-config-standard，并且输出
module.exports = Object.assign({}, standardRules, customRules);