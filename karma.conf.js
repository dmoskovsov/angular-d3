module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/bower_components/d3/d3.js',
      'app/bower_components/lodash/dist/lodash.min.js',
      'app/scripts/*.js',
      'app/scripts/**/**/*.js',
      'test/spec/**/*.js',
      'app/views/**/*.html'
    ],
    preprocessors: {
      'app/views/**/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/',
      moduleName: 'templates'
    },
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-ng-html2js-preprocessor'
    ],
    exclude: [],
    port: 8083,

    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
