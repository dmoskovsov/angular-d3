'use strict';
describe('FocusChart: addTag', function () {
  var chart;

  beforeEach(function () {
    chart = new Chart('body', 500, 500);
  });

  afterEach(function () {
    d3.selectAll('svg').remove();
  });

  it('renders tag', function () {
    chart.render([givenTag('tag1'), givenTag('tag2')]);
    thenTwoTagsDrawn();
  });

  it('removes all tags', function () {
    chart.render([givenTag('tag1'), givenTag('tag2')]);
    chart.render([]);
    expect(getTagGroups().length).toBe(0);
  });

  function thenTwoTagsDrawn() {
    expect(getTagGroups().length).toBe(2);
    thenLineDrawn(getVisualTag('tag1'));
    thenLineDrawn(getVisualTag('tag2'));
  }

  function thenLineDrawn(visualTag) {
    var line = visualTag.select('.line');
    expect(line.attr('d')).toBe('M-6831.660583941605,460L-6303.646255744796,455.4L-5775.6319275479855,441.59999999999997L-5247.617599351176,418.6L-4719.603271154366,386.4L-4191.588942957556,345L-3663.574614760746,294.40000000000003L-3135.560286563936,234.6L-2607.5459583671263,165.6L-2079.531630170316,87.39999999999998');
    expect(line.style('stroke')).toBe(null);
  }

  function getTagGroups() {
    return d3.selectAll('.tag')[0];
  }

  function getVisualTag(name) {
    return d3.select('.tag.' + name);
  }

  function givenTag(name) {
    var tag = {};
    tag.values = givenValues();
    tag.name = name;
    tag.color = '#ff0000';
    return tag;
  }

  function givenValues() {
    var values = [];
    for (var i = 0; i < 10; i++) {
      var point;
      point = {'ts': new Date(100000000000 * i), 'value': i * i};
      values.push(point);
    }
    return values;
  }
});
