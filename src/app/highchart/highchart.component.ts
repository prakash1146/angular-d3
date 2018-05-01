import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent implements OnInit {

  constructor() {
    this.options = {
        title : { text : 'simple chart' },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2],
        }]
      };
  }
  options: Object;

  ngOnInit() {
  }

}
