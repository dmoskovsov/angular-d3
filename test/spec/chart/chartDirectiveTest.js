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
    chart = jasmine.createSpyObj('chart', ['addTag', 'removeTags']);
    scope.chart = chart;
  }));

  it('adds tag', function () {
    var tag = givenTag();
    rootScope.$broadcast('ADD_TAG', tag);
    expect(scope.chart.addTag).toHaveBeenCalledWith(tag);
  });

  it('removes all tags', function () {
    rootScope.$broadcast('REMOVE_TAGS');
    expect(scope.chart.removeTags).toHaveBeenCalled();
  });

  function givenTag() {
    return {name: 'tag1', values: []};
  }

  function compileDirective($compile) {
    var element = angular.element("<chart></chart>");
    $compile(element)(rootScope);
    rootScope.$digest();
    scope = element.scope();
  }
});
