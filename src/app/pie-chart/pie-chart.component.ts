




import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexAnnotations,
  ApexResponsive
} from "ng-apexcharts";

interface CustomApexChart extends ApexChart {
  colors?: string[];
}

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Output() sliceClicked = new EventEmitter<string>();
  constructor(private router: Router) { }
  onSliceClick(sliceName: string) {
    this.sliceClicked.emit(sliceName);
    this.router.navigate(['/intelligence'],{ queryParams: { slicename: sliceName } });
  }
  public colors: string[] = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#20B2AA','#CD853F','#D8BFD8','#FFE4B5','#F08080'];

  @ViewChild("chart") chart!: ChartComponent; // ViewChild to access the chart component
  public series: ApexNonAxisChartSeries = [40, 35, 30, 30, 10, 8, 12, 11, 7];
  public details: CustomApexChart = {
    type: 'donut',
    toolbar: {
      show: false
    },
    events: {
      dataPointSelection: (event: any, chartContext: any, config: any) => {
        const selectedSliceIndex = config.dataPointIndex;
        const selectedSliceName = this.labels[selectedSliceIndex];
        console.log("Clicked slice:", selectedSliceName); // Log the label of the clicked slice
        this.onSliceClick(selectedSliceName);
      }
    }
  } as CustomApexChart;
  totalPercentageElement: ElementRef | undefined;

  public labels = ["CoreX", "Vendormate", "Dataconnect", "Supply chain analytics", "Fusion", "CCX", "E-pay", "Nuvia", "Curate"];
  public title: ApexTitleSubtitle = {
    text: 'PRODUCTS USED',
    align: 'center'
  };
  chartAnnotations: ApexAnnotations = {}; // Initialize chartAnnotations with an empty object



  ngOnInit(): void {
   
  }

}
