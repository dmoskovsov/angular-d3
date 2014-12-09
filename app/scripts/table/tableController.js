'use strict';
/* global Tag */
angular.module('table', []).controller('tableController', function ($scope, tagService) {
  $scope.tag = initTagWithDefaultValues();

  $scope.addTag = function () {
    tagService.addTag($scope.tag);
    $scope.tag = new Tag(1, '', 0, 0, 0, 0);
  };

  $scope.removeTag = function (id) {
    tagService.removeTag(id);
  };

  $scope.removeTags = function () {
    tagService.removeTags();
  };

  function initTagWithDefaultValues() {
    return new Tag(1, 'Company revenue', 7, 18, 45, 83);
  }
});
