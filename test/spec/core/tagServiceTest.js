'use strict';
describe('tagService', function () {
  var rootScope;
  var tagService;

  beforeEach(module('app'));
  beforeEach(inject(function ($rootScope, _tagService_) {
    rootScope = $rootScope;
    tagService = _tagService_;
  }));

  it('add adopted tags', function () {
    spyOn(rootScope, '$broadcast');
    tagService.addTag(givenTag());
    expect(rootScope.$broadcast).toHaveBeenCalledWith('ADD_TAG', givenAdaptedTag());
  });

  it('removes tags', function () {
    spyOn(rootScope, '$broadcast');
    tagService.removeTags();
    expect(rootScope.$broadcast).toHaveBeenCalledWith('REMOVE_TAGS');
  });

  function givenAdaptedTag() {
    var tag = givenTag();
    tag.values = [{value: 7, ts: new Date('2011-01-01T00:00:00Z')},
      {value: 18, ts: new Date('2012-01-01T00:00:00Z')},
      {value: 45, ts: new Date('2013-01-01T00:00:00Z')},
      {value: 83, ts: new Date('2014-01-01T00:00:00Z')}];
    return tag;
  }

  function givenTag() {
    return new Tag('Company revenue', 7, 18, 45, 83);
  }
});
