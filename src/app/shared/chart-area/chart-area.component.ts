import { Component, Input, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexFill,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";

import { BehaviorSubject, Observable } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  colors: string[];
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-chart-area',
  templateUrl: './chart-area.component.html',
  styleUrls: ['./chart-area.component.scss']
})
export class ChartAreaComponent implements OnInit {

  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @Input() dataChart: Observable<any>;

  seriesData: any;

  constructor() {}

  ngOnInit(): void {

    this.dataChart.subscribe((data) => {
      console.log(data);
      this.chartOptions = {
        series: data,
        chart: {
          type: "line",
          height: 528.4,
          stacked: false,
          fontFamily: 'Graphik, Helvetica Neue, sans-serif',
          events: {
            selection: function(chart, e) {
              console.log(new Date(e.xaxis.min));
            }
          }
        },
        colors: ["#FF4560", "#00E396", "#FEB019", "#2E294E"],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.3,
            opacityTo: 0.7
          }
        },
        legend: {
          position: "top",
          horizontalAlign: "left"
        },
        xaxis: {
          type: "datetime"
        },
        tooltip: {
          enabled: true,
          theme: "dark"
        }
      };
    })
    
    

  }
  

}
