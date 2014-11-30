'use strict';
describe('tableController', function () {
  var scope;
  var tagService;

  beforeEach(module('table'));
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    mockTagService();
    createController($controller);
  }));

  it('creates default tag', function () {
    expect(scope.tag.name).toBe('Company revenue');
    expect(scope.tag.value2011).toBe(7);
    expect(scope.tag.value2012).toBe(18);
    expect(scope.tag.value2013).toBe(45);
    expect(scope.tag.value2014).toBe(83);
  });

  it('adds tag', function () {
    var tag = givenTag();
    scope.tag = tag;
    scope.addTag();
    expect(tagService.addTag).toHaveBeenCalledWith(tag);
    expect(scope.tag).toEqual(new Tag('', 0, 0, 0, 0));
  });

  it('removes tags', function () {
    scope.removeTags();
    expect(tagService.removeTags).toHaveBeenCalled();
  });

  function givenTag() {
    return {name: 'tag1', values: []};
  }

  function mockTagService() {
    tagService = jasmine.createSpyObj('tagService', ['addTag', 'removeTags']);
  }

  function createController($controller) {
    $controller('tableController', {
      $scope: scope,
      tagService: tagService
    });
  }
});
