'use strict';
/* global Chart */
angular.module('chart').directive('chart', function () {
  function link(scope, element) {
    var chartHeight = 500;
    var chartWidth = 500;

    function onAddTag(event, tag) {
      scope.chart.addTag(tag);
    }

    function onRemoveTags() {
      scope.chart.removeTags();
    }

    scope.chart = new Chart(element[0], chartWidth, chartHeight);
    scope.$on('ADD_TAG', onAddTag);
    scope.$on('REMOVE_TAGS', onRemoveTags);
  }

  return {
    controller: 'chartController',
    templateUrl: 'views/chart.html',
    restrict: 'E',
    link: link
  };
});
