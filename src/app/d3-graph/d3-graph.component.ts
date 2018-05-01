import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';

import {
  D3Service,
  D3,
  Axis,
  BrushBehavior,
  BrushSelection,
  D3BrushEvent,
  ScaleLinear,
  ScaleOrdinal,
  Selection,
  Transition
} from 'd3-ng2-service';


@Component({
  selector: 'app-d3graph',
  template: '<div></div>'
})
export class D3GraphComponent implements OnInit {
  private d3: D3;
  private parentNativeElement: any;
  private d3Svg: Selection<SVGSVGElement, any, null, undefined>;

  constructor(element: ElementRef, private ngZone: NgZone, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {
            let self = this;
            let d3 = this.d3;
            let d3ParentElement: any;
            let svg: any;
            let name: string;
            let yVal: number;
            let colors: any = [];
            let data: {name: string, yVal: number}[] = [];
            let padding: number = 25;
            let width: number = 500;
            let height: number = 150;
            let xScale: any;
            let yScale: any;
            let xColor: any;
            let xAxis: any;
            let yAxis: any;

    if (this.parentNativeElement !== null) {
      /* Selection by Tag
      <div>
         Hello World!    
      </div>
      d3.select(“div”)
      -----------------
      Selection by Class name
      <div class = "myclass">
         Hello World!
      </div>
      alert(d3.select(".myclass").text());
      -------------------
      Selection by ID
      <div id = "hello">
         Hello World!
      </div>
      alert(d3.select("#hello").text());   d3.select("div.myclass")
      -----------------

      */

      svg = d3.select(this.parentNativeElement)
          .append('svg')        // create an <svg> element
          .attr('width', width) // set its dimensions
          .attr('height', height);

      colors = ['red', 'yellow', 'green', 'blue'];

      data = [
          {name : 'A', yVal : 1},
          {name : 'B', yVal : 4},
          {name : 'C', yVal : 2},
          {name : 'D', yVal : 3}
      ];

      xScale = d3.scaleBand()
          .domain(data.map(function(d){ return d.name; }))
          .range([0, 200]);

      yScale = d3.scaleLinear()
          .domain([0,d3.max(data, function(d) {return d.yVal})])
          .range([100, 0]);

      xAxis = d3.axisBottom(xScale) // d3.js v.4
          .ticks(5)
          .scale(xScale);

      yAxis = d3.axisLeft(xScale) // d3.js v.4
          .scale(yScale)
          .ticks(7);

        svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + (padding) + "," + padding + ")")
        .call(yAxis);

	       svg.append('g')            // create a <g> element
         .attr('class', 'axis')   // specify classes
	       .attr("transform", "translate(" + padding + "," + (height - padding) + ")")
         .call(xAxis);            // let the axis do its thing

      var rects = svg.selectAll('rect')
          .data(data);
          /* 
          Data join provides the following four methods to work with data set :: datum() data() enter() exit()
          The datum() Method
          The datum() method is used to set value for a single element in the HTML document.

          The data() method
          The data() method is used to assign a data set to a collection of elements in a HTML document.

          The enter() method
          The enter() method outputs the set of data item for which no graphic element existed before.

          d3.select("#list").selectAll("li")  
          .data([10, 20, 30, 25, 15])
          .text(function(d) { return "This is pre-existing element and the value is " + d; })  // .text(function (d, i){   d= data , i=index}
          .enter()
          .append("li")
          .text(function(d) { return "This is dynamically created element and the value is " + d; });
          

         The exit() method
         The exit() method outputs the set of graphic elements for which no data exists any longer.


         */

          rects.size();

      var newRects = rects.enter();

      newRects.append('rect')
          .attr('x', function(d,i) {
            return xScale(d.name );
          })
          .attr('y', function(d) {
              return yScale(d.yVal);
            })
	        .attr("transform","translate(" + (padding -5  + 25) + "," + (padding - 5) + ")")
          .attr('height', function(d) {
              return height - yScale(d.yVal) - (2*padding) + 5})
          .attr('width', 10)
          .attr('fill', function(d, i) {
            return colors[i];
          });
     }
   }
 }
