'use strict';
angular.module('app').service('tagService', function ($rootScope) {
  var self = this;

  self.addTag = function (tag) {
    $rootScope.$broadcast('ADD_TAG', getAdaptedTag(tag));
  };

  self.removeTags = function () {
    $rootScope.$broadcast('REMOVE_TAGS');
  };

  function getAdaptedTag(tag) {
    tag.values = [{value: tag.value2011, ts: new Date('2011-01-01T00:00:00Z')},
      {value: tag.value2012, ts: new Date('2012-01-01T00:00:00Z')},
      {value: tag.value2013, ts: new Date('2013-01-01T00:00:00Z')},
      {value: tag.value2014, ts: new Date('2014-01-01T00:00:00Z')}];
    return tag;
  }
});
