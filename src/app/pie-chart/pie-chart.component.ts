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

  onSliceClick(sliceName: string) {
    this.sliceClicked.emit(sliceName);
  }
  public colors: string[] = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#20B2AA','#CD853F','#D8BFD8','#FFE4B5','#F08080'];

  @ViewChild("chart") chart!: ChartComponent; // ViewChild to access the chart component
  public series: ApexNonAxisChartSeries = [40, 35, 30, 30, 10, 8, 12, 11, 7];
  public details: CustomApexChart = {
    type: 'donut',
    toolbar: {
      show: false
    },
  } as CustomApexChart;
  totalPercentageElement: ElementRef | undefined;

  public labels = ["CoreX", "Vendormate", "Dataconnect", "Supply chain analytics", "Fusion", "CCX", "E-pay", "Nuvia", "Curate"];
  public title: ApexTitleSubtitle = {
    text: 'PRODUCTS USED',
    align: 'center'
  };
  chartAnnotations: ApexAnnotations = {}; // Initialize chartAnnotations with an empty object

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    this.addTotalAnnotation();
  }

  handleSliceClick(event: any): void {
    // const sliceName = event.target.getLabel(); 
    // this.sliceClicked.emit(sliceName);
    
    
    this.router.navigate(['/intelligence']);
  }


  
  private addTotalAnnotation(): void {
    const total = this.series.reduce((acc, val) => acc + val, 0); // Calculate total
    const annotation: ApexAnnotations = {
      points: [{
        x: 50,
        y: 50,
        marker: {
          size: 50
        },
        label: {
          text: total.toString(), // Convert to string to display
          style: {
            fontSize: '2.5rem',
       color: 'black'
          }
        }
      }]
    };
    this.chartAnnotations = annotation; // Assign the annotation to chartAnnotations
  }
}
