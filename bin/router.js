'use strict';

const router = require('koa-router')();

/**
 * Index
 */
router.get('/', function* () {
  this.render('index', {
    userInfo: {}
  });
});

/**
 * Statistic
 */
router.get('/statistic', function* () {
  this.render('statistic', {
    userInfo: {}
  });
});

/**
 * Initialize
 */
router.get('/initialize', function* () {
  this.render('initialize');
});

module.exports = router;