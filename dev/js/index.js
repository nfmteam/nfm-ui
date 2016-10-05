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

    self.$loadingbar = $('.nfm-loadingbar');
    self.$message = $('.nfm-message');
  },

  bindEvents: function () {
    var self = this;

    // loadingbar
    setTimeout(function () {
      self.$loadingbar.addClass('end');
    }, 3000);

    // show message
    setTimeout(function () {
      self.$message.addClass('show');
    }, 1000);

    // close message
    self.$message.on('click', '.close', function () {
      self.$message.removeClass('show').addClass('hide');
    });
  }
};

$(function () {
  app.init();
});