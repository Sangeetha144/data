import { Component, OnInit } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
 
import {
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart
  } from "ng-apexcharts";
 
  export type ChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
  };
 
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent  {
  chartOptions : any = {
    series: [44, 55, 13, 43, 22, 37, 40, 33, 27],
    chart: {
      type: 'donut',
      events: {
        dataPointSelection: (event: any, chartContext: any, config: { w: { config: { labels: { [x: string]: any; }; }; }; dataPointIndex: string | number; }) => {
          const label = config.w.config.labels[config.dataPointIndex];
          this.redirectToIntelligenceComponent(label);
        }
      }
    },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8', '#1A237E'],
    labels: ['CoreX', 'Vendormate', 'Data connect', 'Supply chain analytics', 'Fusion', 'Nuvia', 'E-pay', 'Curate', 'CCXpert'],
   
    dataLabels: {
        enabled: false
      },
    legend: {
        position: 'bottom',
        horizontalAlign: 'left',
        offsetY: 10,
        itemMargin: {
          horizontal: 20
        }
      },
     
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center'
          }
      }
    }]
  };
 
  redirectToIntelligenceComponent(label: string) {
    // Redirect to intelligence component passing label as a query parameter
    window.location.href = `intelligence?label=${encodeURIComponent(label)}`;
  }
 
  handleChartClick(event: any) {
    // Handle chart click event if needed
    console.log(event);
  }
}