# voronoi.js API Reference

A voronoi diagram creator with various parameters for creating or updating the graph

## API Functions

\# *Voronoi*()

> Constructs a Voronoi object with default values

\# *Voronoi*.**width**(width)
> Sets the width of the graph. Width must be an int or float, and is represented in pixels

\# *Voronoi*.**height**(height)
> Sets the height of the graph. Height must be an int or float, and is represented in pixels

\# *Voronoi*.**rectColor**(colorArray)
> Sets color of rectangles. ColorArray is array of string 'rgb(x,x,x)' values or named colors ie. 'blue'. Even if you just want one color for all the polygons, must pass an array

\# *Voronoi*.**rectOpacity**(value)
> Sets opacity of the rectangles. Value must be an integer or float that must be between 0 and 1

\# *Voronoi*.**circleSize**(value)
> Sets circle size of points in the diagram. Value must be int or float
