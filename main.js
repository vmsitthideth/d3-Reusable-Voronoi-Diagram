$(function () {

var dataSet = d3.range(100).map(function(d) {
  return [Math.random() * 960, Math.random() * 500];
});

// console.log(dataSet)

// var dataSet = [
// 	[1, 2],
// 	[3, 4],
// 	[5, 6]
// ];


// var dataSet = [
// 	[0, 5],
// 	[5, 10],
// 	[10, 15],
// 	[15, 20],
// 	[20, 25],
// 	[25, 30]
// ];

var myChart = Voronoi();

var chartWrapper = d3.select('#my-div')
						.datum(dataSet)
						.call(myChart);

myChart.width(900)
	   .height(500)
	   .rectColor(['red', 'blue', 'white', 'green', 'yellow'])
	   .rectOpacity(0.5)
	   .circleSize(10);

chartWrapper.datum(dataSet).call(myChart);
})