'use strict';

var $ = require('../libs/jquery/dist/jquery');

var app = {
  init: function () {
    var self = this;

    self.cacheElements();
    self.initChart();
    self.bindEvents();
  },

  cacheElements: function () {
    var self = this;

    self.$loadingbar = $('.nfm-loadingbar');
  },

  initChart: function () {
    window.c3.generate({
      bindto: '.chart',
      size: {
        height: 300
      },
      data: {
        columns: [
          ['Javascript', 100],
          ['CSS', 70],
          ['HTML', 30],
          ['Images', 50],
          ['Other', 40]
        ],
        type: 'pie'
      }
    });
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