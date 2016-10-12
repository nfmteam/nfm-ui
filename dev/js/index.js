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
    self.$dialogNew = $('.J_Dialog_New');
    self.$dialogUpload = $('.J_Dialog_Upload');
    self.$menu = $('.J_Menu');
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

    // new folder
    self.$body.on('click', '.J_NewFolder', function () {
      self.$dialogNew.addClass('active');
    });

    // upload
    self.$body.on('click', '.J_Upload', function () {
      self.$dialogUpload.addClass('active');
    });

    // dialog close
    self.$body.on('click', '.J_Dialog_Close', function () {
      $(this).closest('.nfm-dialog').removeClass('active');
      return false;
    });

    // checkbox
    self.$body.on('click', '.checkbox', function () {
      var $input = $(this).find('input');
      var checked = $input.prop('checked');

      $input.prop('checked', !checked);
    });

    // menu
    self.$body.on('contextmenu', function (e) {
      var $t = $(e.target);
      var isInWorkspaceTable = $t.closest('.workspace-table tbody').length;
      var x = e.clientX;
      var y = e.clientY;

      if (isInWorkspaceTable) {
        self.$menu.css({
          display: 'block',
          left: x,
          top: y
        });

        e.preventDefault();
      } else {
        self.$menu.css({
          display: 'none'
        });
      }
    });

    // hide menu
    self.$body.on('click', function () {
      self.$menu.css({
        display: 'none'
      });
    });
  }
};

$(function () {
  app.init();
});