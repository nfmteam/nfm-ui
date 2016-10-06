'use strict';

const router = require('koa-router')();

/**
 * Index
 */
router.get('/', function* () {
  this.render('index');
});

module.exports = router;