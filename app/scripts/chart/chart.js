'use strict';
function Chart(element, canvasWidth, canvasHeight) {
  var self = this;
  var margin = 20;
  var width = canvasWidth - margin - margin;
  var height = canvasHeight - margin - margin;
  var svg;
  var xScale = d3.time.scale()
    .range([0, canvasWidth])
    .domain([new Date('2011-01-01T00:00:00Z'), new Date('2014-01-01T00:00:00Z')]);

  var yScale = d3.scale.linear()
    .range([height, 0])
    .domain([0, 100]);

  self.render = function (tags) {
    var groups = svg.selectAll('.tag').data(tags);
    var group = enterGroup(groups);
    updateLines(group);
    groups.exit().remove();
  };

  function enterGroup(groups) {
    return groups.enter()
      .insert('g', ':first-child')
      .attr('class', classFunction);
  }

  function updateLines(tagGroup) {
    tagGroup.append('path')
      .attr('class', 'line')
      .attr('d', lineFunction)
      .style('stroke', '0xff0000');
  }

  function lineFunction(tag) {
    var line = d3.svg.line()
      .x(xFunction)
      .y(yFunction);
    return line(tag.values);
  }

  function xFunction(tagValue) {
    return xScale(tagValue.ts);
  }

  function yFunction(tagValue) {
    return yScale(tagValue.value);
  }

  function classFunction(tag) {
    return 'tag ' + tag.name;
  }

  function createSvg() {
    svg = d3.select(element)
      .append('svg')
      .attr('width', canvasWidth)
      .attr('height', canvasHeight)
      .append('g')
      .attr('transform', 'translate(' + margin + ',' + margin + ')');
  }

  function createXAxis() {
    var xAxis = d3.svg.axis()
      .scale(xScale)
      .ticks(4)
      .tickSize(-canvasHeight, 0, 0)
      .orient('bottom');

    svg.append('g')
      .attr('class', 'xaxis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);
  }

  function createYAxis() {
    var yAxis = d3.svg.axis()
      .scale(yScale)
      .ticks(4)
      .tickSize(-canvasWidth, 0, 0)
      .orient('left');

    svg.append('g')
      .attr('class', 'yaxis')
      .call(yAxis);
  }

  createSvg();
  createXAxis();//todo dmoskovtsov tests
  createYAxis();
}
