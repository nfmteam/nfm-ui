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

    self.$body = $('body');
    self.$loadingbar = $('.nfm-loadingbar');
    self.$form = $('.J_Form');
  },

  bindEvents: function () {
    var self = this;

    // loadingbar
    setTimeout(function () {
      self.$loadingbar.addClass('end');
    }, 3000);

    // checkbox
    self.$body.on('click', '.checkbox', function () {
      var $input = $(this).find('input');
      var checked = $input.prop('checked');

      $input.prop('checked', !checked);
    });

    // save
    self.$body.on('click', '.J_Save', function () {
      self.$form.addClass('loading');

      setTimeout(function () {
        self.$form.removeClass('loading');
      }, 2000);
    });
  }
};

$(function () {
  app.init();
});