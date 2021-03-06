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
 * System
 */
router.get('/system', function* () {
  this.render('system');
});

/**
 * Login
 */
router.get('/login', function* () {
  this.render('login');
});

module.exports = router;