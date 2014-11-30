'use strict';
angular.module('app').controller('introductionController', function ($scope) {
  $scope.slides = [
    {
      image: 'http://placekitten.com/604/300',
      challenge: 'Switching to dynamic language as javascript'
    }, {
      image: 'http://placekitten.com/602/300',
      challenge: 'Building heavy-unique? charting functionality with d3.js and combining it with angular'
    }, {
      image: 'http://placekitten.com/603/300',
      challenge: 'Diving into concepts of functional programming with Clojure'
    }
  ];

});
