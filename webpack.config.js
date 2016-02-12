var path = require('path');
var webpack = require('webpack');

var config = module.exports = {
  // the base path which will be used to resolve entry points
  context: __dirname,
  // the main entry point for our application's frontend JS
  entry: {
    polyfills: 'angular2/bundles/angular2-polyfills.js',
    systemjs: 'systemjs/dist/system.src.js',
    rxjs: 'rxjs/bundles/Rx.js',
    angular2: 'angular2/bundles/angular2.dev.js',
    router: 'angular2/bundles/router.dev.js'
  }
};

config.output = {
  // this is our app/assets/javascripts directory, which is part of the Sprockets pipeline
  path: path.join(__dirname, 'app', 'assets', 'javascripts', 'modules'),
  // the filename of the compiled bundle, e.g. app/assets/javascripts/bundle.js
  filename: '[name].js',
  // if the webpack code-splitting feature is enabled, this is the path it'll use to download bundles
  publicPath: '/assets',
};

config.resolveLoader = {
  fallback: path.join(__dirname, 'node_modules'),
  // tell webpack which extensions to auto search when it resolves modules. With this,
  // you'll be able to do `require('./utils')` instead of `require('./utils.js')`
  extensions: ['', '.js'],
  // by default, webpack will search in `web_modules` and `node_modules`. Because we're using
  // Bower, we want it to look in there too
  modulesDirectories: [ 'node_modules' ],
};
