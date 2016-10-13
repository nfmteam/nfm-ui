'use strict';

const router = require('koa-router')();

/**
 * Index
 */
router.get('/', function* () {
  this.render('index');
});

/**
 * Statistic
 */
router.get('/statistic', function* () {
  this.render('statistic');
});

/**
 * Initialize
 */
router.get('/initialize', function* () {
  this.render('initialize');
});

module.exports = router;