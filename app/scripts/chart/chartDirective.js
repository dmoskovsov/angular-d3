'use strict';
/* global Chart */
angular.module('chart').directive('chart', function () {
  function link(scope, element) {
    var chartHeight = 500;
    var chartWidth = 500;

    function onUpdateTags(event, tags) {
      scope.chart.render(tags);
    }

    scope.chart = new Chart(element[0], chartWidth, chartHeight);
    scope.$on('UPDATE_TAGS', onUpdateTags);
  }

  return {
    controller: 'chartController',
    templateUrl: 'views/chart.html',
    restrict: 'E',
    link: link
  };
});
