'use strict';
/* global Tag */
angular.module('table', []).controller('tableController', function ($scope, tagService) {
  $scope.tag = initTagWithDefaultValues();

  $scope.addTag = function () {
    tagService.addTag($scope.tag);
    $scope.tag = new Tag('', 0, 0, 0, 0);
  };

  $scope.removeTags = function () {
    tagService.removeTags();
  };

  function initTagWithDefaultValues() {
    return new Tag('Company revenue', 7, 18, 45, 83);
  }
});
