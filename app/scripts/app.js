'use strict';
angular.module('app', [
  'd3',
  'ngRoute',
  'ui.bootstrap',
  'chart',
  'table'
]).config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'introductionController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
