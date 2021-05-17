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

import { Observable } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  colors: string[];
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
};

import numeral from 'numeral';
import { IChartAreaData } from '../../core/interfaces/covid.interfaces';
@Component({
  selector: 'app-chart-area',
  templateUrl: './chart-area.component.html',
  styleUrls: ['./chart-area.component.scss']
})
export class ChartAreaComponent implements OnInit {

  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @Input() dataChart: Observable<any>;
  @Input() height: number;
  @Input() color: string[];
  @Input() title: string;
  seriesData: IChartAreaData[] = [];
  loading = false;
  

  constructor() {}

  ngOnInit(): void {

    this.dataChart.subscribe((data) => {
      this.seriesData = data;
      this.chartOptions = {
        series: this.seriesData,
        chart: {
          type: 'line',
          width: '100%',
          height: this.height,
          stacked: false,
          fontFamily: 'Graphik, Helvetica Neue, sans-serif',
          events: {
            selection: function(chart, e) {
              console.log(new Date(e.xaxis.min));
            }
          }
        },
        colors: this.color,
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
          show: false,
          position: "top",
          horizontalAlign: "left"
        },
        xaxis: {
          type: "datetime"
        },
        yaxis: {
          labels: {
            formatter: (value) => {
              return `${numeral(value).format('0,0')}`;
            },
          }
        },
        tooltip: {
          enabled: true,
          theme: "dark",
          style: {
            fontSize: '12px',
            fontFamily: undefined
          },
          x: {
            show: true,
            format: 'dd MMM yyyy',
            formatter: undefined,
          },
          y: {
            formatter: (value) => {
              return `${numeral(value).format('0,0')}`;
            },
          },
          z: {
              formatter: undefined,
              title: 'Size: '
          },
        }
      }
    })
    
    

  }
  

}
