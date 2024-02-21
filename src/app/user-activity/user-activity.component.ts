
import { Component, OnInit,ViewChild } from '@angular/core';
 
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexLegend,
  ApexPlotOptions,
  ApexTitleSubtitle
} from "ng-apexcharts";
 
 
@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.scss']
})
export class UserActivityComponent implements OnInit {
  isLoading: boolean = true;
  donutChart1Options: any = {
    series: [44, 55, 41],
    chart: {
      type: 'donut',
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center'
    },
    title: {
      text: 'Device Category'
    },
    labels: ['Desktop', 'Mobile', 'Others'],
    colors: ['#228B22', '#FFA500', '#A9A9A9'],
   
    plotOptions: {
      pie: {
        customScale: 0.8, // Adjust the size of the donut
        dataLabels: {
            offset: -10, // Position the labels inside the donut
            minAngleToShowLabel: 10, // Show labels only when the angle is greater than 10 degrees
            formatter: function (val: any) {
                return `${val}%`; // Display percentage value
            }
        }
    }
 
    },
    fill: {
      colors: ['#fff'] // Background color of the donut hole
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
 
 
  donutChart2Options: any = {
    series: [30, 40, 45, 60],
    chart: {
      type: 'donut',
    
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center'
    },
    title: {
      text: 'Browser'
    },
    labels: ['Chrome', 'Safari', 'Edge', 'Others'],
    colors: ['#228B22', '#FF0000', '#FFA500', '#A9A9A9'] // corrected from colors2 to colors
  };
 
  distributedTreemapOptions: any = {
    series: [{
      data: [
        { x: 'Home', y: 800 },
        { x: 'Documents', y: 300 },
        { x: 'View access status', y: 300 },
        { x: 'View health system', y: 600 },
        { x: 'Documents', y: 400 },
        { x: 'Appointment', y: 350 },
        { x: 'Badging history', y: 200 },
        { x: 'Payment', y: 300 }
      ],
      }],
    chart: {
      type: 'treemap',
      height: '300',
      width: '300'
    },
    title: {
      text: 'Most visited screens'
    },
    colors: [
      '#3B93A5',
'#DB7093',
      '#ADD8C7',
      '#EC3C65',
      '#CDD7B6',
      '#C1F666',
      '#D43F97',
      '#1E5D8C',
   
    ],
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false
      }
    }
  };
 
  funnelChartOptions: any = {
    series: [
      {
        name: "Funnel Series",
        data: [1380, 1100, 990, 880, 740, 548, 330, 200],
      },
    ],
    chart: {
      type: 'bar',
      height: 300,
    },
    plotOptions: {
      funnel: { // corrected from bar to funnel
        borderRadius: 0,
        horizontal: true,
        barHeight: "80%",
        isFunnel: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any, opt: any) {
        return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val;
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      text: 'Functional flow',
      align: 'left',
    },
    xaxis: {
      categories: [
        'Sourced',
        'Screened',
        'Assessed',
        'HR Interview',
        'Technical',
        'Verify',
        'Offered',
        'Hired',
      ],
    },
    legend: {
      show: true,
    },
  };
 
  heatmapChartOptions: any = {
   // Define heatmap chart options here
      series: [
        {
          name: 'Access status',
          data: [
            { x: 'Mon', y: 45 },
            { x: 'Tue', y: 15 },
            { x: 'Wed', y: 25 },
            { x: 'Thu', y: 30 },
            { x: 'Fri', y: 10 },
            { x: 'Sat', y: 35 },
            { x: 'Sun', y: 20 }
          ]
        },
        {
          name: 'Profile',
          data: [
            { x: 'Mon', y: 45 },
            { x: 'Tue', y: 5 },
            { x: 'Wed', y: 20 },
            { x: 'Thu', y: 32 },
            { x: 'Fri', y: 42 },
            { x: 'Sat', y: 20 },
            { x: 'Sun', y: 25 }
          ]
        },
        {
          name: 'Appointment',
          data: [
            { x: 'Mon', y: 35 },
            { x: 'Tue', y: 25 },
            { x: 'Wed', y: 30 },
            { x: 'Thu', y: 35 },
            { x: 'Fri', y: 10 },
            { x: 'Sat', y: 40 },
            { x: 'Sun', y: 25 }
          ]
        },
        {
          name: 'Documents',
          data: [
            { x: 'Mon', y: 40 },
            { x: 'Tue', y: 25 },
            { x: 'Wed', y: 10 },
            { x: 'Thu', y: 35 },
            { x: 'Fri', y: 15 },
            { x: 'Sat', y: 20 },
            { x: 'Sun', y: 25 }
          ]
        },
        {
          name: 'Accounts',
          data: [
            { x: 'Mon', y: 45 },
            { x: 'Tue', y: 25 },
            { x: 'Wed', y: 30 },
            { x: 'Thu', y: 35 },
            { x: 'Fri', y: 45 },
            { x: 'Sat', y: 40 },
            { x: 'Sun', y: 25 }
          ]
        },
        // Add more series as needed
      ],
      chart: {
        type: 'heatmap',
        height: 300,
       
        width: '1200px'
      },
      plotOptions: {
        heatmap: {
          reverseNegativeShade: true
        }
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Pages visited',
        align: 'left',
      },
      xaxis: {
        type: 'category'
      },
      yaxis: {
        reversed: true
      },
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0'] // Different colors for each series
   
  };
 
  constructor() { }
 
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false; // Hide loading icon after 2 seconds
    }, 1000);
 
  }
}
 