'use strict';
angular.module('app').service('tagService', function ($rootScope) {
  var self = this;
  self.tags = [];

  self.addTag = function (tag) {
    self.tags.push(adaptTag(tag));
    broadcastUpdate();
  };

  self.removeTag = function (id) {
    _.remove(self.tags, {id: id});
    broadcastUpdate();
  };

  self.removeTags = function () {
    self.tags = [];
    broadcastUpdate();
  };

  function broadcastUpdate() {
    $rootScope.$broadcast('UPDATE_TAGS', self.tags)
  }

  function adaptTag(tag) {
    tag.values = [{value: tag.value2011, ts: new Date('2011-01-01T00:00:00Z')},
      {value: tag.value2012, ts: new Date('2012-01-01T00:00:00Z')},
      {value: tag.value2013, ts: new Date('2013-01-01T00:00:00Z')},
      {value: tag.value2014, ts: new Date('2014-01-01T00:00:00Z')}];
    return tag;
  }
});
