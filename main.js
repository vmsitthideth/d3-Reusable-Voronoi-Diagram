$(function () {


var dataSet = [
	[1, 2],
	[3, 4],
	[5, 6]
];


// var dataSet = [
// 	{'x': 0, 'y': 5},
// 	{'x': 5, 'y': 10},
// 	{'x': 10, 'y': 15},
// 	{'x': 15, 'y': 20},
// 	{'x': 20, 'y': 25},
// 	{'x': 25, 'y': 30}
// ];

var myChart = Voronoi();

var chartWrapper = d3.select('#my-div')
						.datum([dataSet])
						.call(myChart);

myChart.width(900)
	   .height(500)
	   .rectColor(['red'])
	   .rectOpacity(0.5)
	   .circleSize(10);

chartWrapper.datum([dataSet]).call(myChart);
})