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
    self.$laod = $('.nfm-load');
    self.$loadingbar = $('.nfm-loadingbar');
    self.$message = $('.nfm-message');
    self.$dialogAlert = $('.J_Dialog_Alert');
    self.$searchBtn = $('.J_SearchBtn');
    self.$historyCloseBtn = $('.history-close');
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

    // search button
    self.$searchBtn.on('click', function () {
      self.$searchBtn.addClass('active visible');
      self.$searchBtn.find('.menu').addClass('transition visible');
    });

    self.$body.on('click', function (e) {
      var $t = $(e.target);
      var isInSearchBtn = !!$t.closest('.J_SearchBtn').length;
      var isInSearchBtnMenu = !!$t.closest('.J_SearchBtn').length && !!$t.closest('.menu').length;

      if (!isInSearchBtn || isInSearchBtnMenu) {
        self.$searchBtn.removeClass('active visible');
        self.$searchBtn.find('.menu').removeClass('transition visible');
      }
    });

    // history close
    self.$historyCloseBtn.on('click', function () {
      self.$historyCloseBtn.closest('.nfm-history').addClass('close');
    });

    // favorites
    self.$body.on('click', '.J_Favorite', function () {
      self.$dialogAlert.addClass('active');
    });

    // dialog alert close
    self.$body.on('click', '.J_Dialog_Alert_Close', function () {
      self.$dialogAlert.removeClass('active');
    });
  }
};

$(function () {
  app.init();
});