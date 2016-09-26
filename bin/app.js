'use strict';

const path = require('path');
const koa = require('koa');
const app = koa();
const serve = require('koa-static');
const favicon = require('koa-favicon');

const cssInterceptor = require('./cssInterceptor');
const webpack = require('webpack');
const webpackMiddleware = require('koa-webpack-dev-middleware');
const webpackConfig = require('../webpack.config');

const devPath = path.resolve(__dirname, '../dev');
const iconPath = path.resolve(__dirname, '../public/favicon.ico')

// favicon.ico
app.use(favicon(iconPath));

// postcss
app.use(cssInterceptor(devPath));

// js(webpack)
app.use(webpackMiddleware(webpack(webpackConfig), {
  publicPath: '/script/',
  stats: {
    colors: true
  }
}));

// static, eg: images, html
app.use(serve(devPath));

app.listen(3011);