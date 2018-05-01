import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent implements OnInit {

  constructor() {
    this.options = {
      chart: {
          type: 'column',
          width: 0.9 * document.documentElement.clientWidth
      },
      title: {
          text: 'Model Comparison'
      },
      xAxis: {
          categories: [
              'Direct',
              'Display',
              'Email',
              'Organic Search',
              'Paid Search',
              'Social Media'
          ],
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Conversions',
              style:{
                fontWeight: 'bold',
                fontSize: '12px'
              }
              

          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:15px;font-weight: bold;padding-bottom: 0px;margin-bottom: 0px;">{point.key}</span><hr style="border: 1px solid #999999;"><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0px">{series.name}: </td>' +
              '<td style="padding:0px"><b>{point.y:.1f} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          backgroundColor:'#f2f2f2',
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.1,
              borderWidth: 0
          }
      },
      series: [{
          name: 'Conversion (Last Click)',
          data: [50, 94, 88, 71, 85, 162],
          color: '#32cd32'

  
      }, {
          name: 'Conversion (Position Based)',
          data: [50, 86.07, 88.9, 65.63, 87.6, 171],
          color: '#99ddff'
  
      }]
  };
  }
  options: Object;

  ngOnInit() {
  }

}
