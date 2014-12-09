'use strict';
describe('chartDirective', function () {
  var rootScope;
  var chart;
  var scope;

  beforeEach(module('app'));
  beforeEach(module('templates'));
  beforeEach(inject(function ($rootScope, $compile) {
    rootScope = $rootScope;
    compileDirective($compile);
    chart = jasmine.createSpyObj('chart', ['render']);
    scope.chart = chart;
  }));

  it('renders tags', function () {
    var tags = givenTags();
    rootScope.$broadcast('UPDATE_TAGS', tags);
    expect(scope.chart.render).toHaveBeenCalledWith(tags);
  });

  function givenTags() {
    return [{name: 'tag1', values: []}];
  }

  function compileDirective($compile) {
    var element = angular.element("<chart></chart>");
    $compile(element)(rootScope);
    rootScope.$digest();
    scope = element.scope();
  }
});
