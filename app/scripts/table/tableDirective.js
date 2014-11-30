'use strict';
angular.module('table').directive('table', function () {
    return {
        controller: 'tableController',
        templateUrl: 'views/table.html',
        restrict: 'E'
    };
});
