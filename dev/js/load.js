'use strict';

var $ = require('../libs/jquery/dist/jquery');

var app = {
  init: function () {
    var self = this;

    self.cacheElements();
    self.bindEvents();
  },

  cacheElements: function () {
    var self = this;

    self.$laod = $('.nfm-load');
  },

  bindEvents: function () {
    var self = this;

    // end
    setTimeout(function () {
      self.$laod.addClass('end');
    }, 3000);
  }
};

$(function () {
  app.init();
});