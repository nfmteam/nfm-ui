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
    self.$loadingbar = $('.nfm-loadingbar');
    self.$message = $('.nfm-message');
    self.$dialogAlert = $('.J_Dialog_Alert');
  },

  bindEvents: function () {
    var self = this;

    // end
    setTimeout(function () {
      self.$laod.addClass('end');
    }, 1000);

    // loadingbar
    setTimeout(function () {
      self.$loadingbar.addClass('end');
    }, 3000);

    // message in
    setTimeout(function () {
      self.$message.addClass('in');
    }, 2000);

    // message out
    var messageOutTimer = setTimeout(function () {
      self.$message.addClass('out');
    }, 6000);

    // close message
    self.$message.on('click', '.close', function () {
      window.clearTimeout(messageOutTimer);
      self.$message.removeClass('in out').addClass('close');
    });
  }
};

$(function () {
  app.init();
});