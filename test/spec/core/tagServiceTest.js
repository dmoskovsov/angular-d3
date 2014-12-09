'use strict';
describe('tagService', function () {
  var rootScope;
  var tagService;

  beforeEach(module('app'));
  beforeEach(inject(function ($rootScope, _tagService_) {
    rootScope = $rootScope;
    tagService = _tagService_;
  }));

  it('add adapted tags', function () {
    spyOn(rootScope, '$broadcast');
    tagService.addTag(givenTag(1));
    var tag = givenAdaptedTag();
    expect(rootScope.$broadcast).toHaveBeenCalledWith('UPDATE_TAGS', [tag]);
    expect(tagService.tags).toEqual([tag]);
  });

  it('removes tag', function () {
    spyOn(rootScope, '$broadcast');
    tagService.tags = [givenTag(1), givenTag(2)];
    tagService.removeTag(1);
    expect(rootScope.$broadcast).toHaveBeenCalledWith('UPDATE_TAGS', [givenAdaptedTag()]);
    expect(tagService.tags.length).toBe(1);
    expect(tagService.tags[0].id).toBe(2);
  });

  it('removes all tags', function () {
    tagService.tags = [givenTag(1), givenTag(2)];
    spyOn(rootScope, '$broadcast');
    tagService.removeTags(1);
    expect(rootScope.$broadcast).toHaveBeenCalledWith('UPDATE_TAGS', []);
    expect(tagService.tags).toEqual([]);
  });

  function givenAdaptedTag() {
    var tag = givenTag(1);
    tag.values = [{value: 7, ts: new Date('2011-01-01T00:00:00Z')},
      {value: 18, ts: new Date('2012-01-01T00:00:00Z')},
      {value: 45, ts: new Date('2013-01-01T00:00:00Z')},
      {value: 83, ts: new Date('2014-01-01T00:00:00Z')}];
    return tag;
  }

  function givenTag(id) {
    return new Tag(id, 'Company revenue', 7, 18, 45, 83);
  }
});


