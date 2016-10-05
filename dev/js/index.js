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

    self.$loadingbar = $('.loadingbar');
  },

  bindEvents: function () {
    var self = this;

    // loadingbar
    setTimeout(function () {
      self.$loadingbar.addClass('end');
    }, 3000);
  }
};

$(function () {
  app.init();
});