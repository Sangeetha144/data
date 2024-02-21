import { Component, ViewChild,OnInit, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-intelligence',
  templateUrl: './intelligence.component.html',
  styleUrls: ['./intelligence.component.scss']
})
export class IntelligenceComponent implements OnInit{
  @ViewChild('fromDatePicker') fromDatePicker!: ElementRef<HTMLInputElement>;
 
  showSpinner: boolean = false;
  submitted:boolean=false;

 
  onSubmit() {
    this.submitted = true; // Set submitted to true
    this.showSpinner = true; // Show spinner
 
    setTimeout(() => {
      this.hideSpinner(); // Hide spinner after 5 seconds
    }, 2000);
  }
 
  hideSpinner() {
    this.showSpinner = false; // Hide spinner
    this.submitted = false; // Reset submitted flag to false
  }
//autocomplete
typearray = ['No of Logins', 'No of successful payment', 'No of failure payment'];
filteroptions: Observable<string[]> = new Observable<string[]>();
formcontrol = new FormControl('');
selectedOption: string | null = null;
opt:string ="No of Logins";

public clearFilter(): void {
  this.formcontrol.setValue(''); // Clear the selected option
  this.selectedOption = null; // Reset selectedOption
  
}

ngOnInit(): void {
  this.filteroptions = this.formcontrol.valueChanges.pipe(
    startWith(''),
    map(value => this._FILTER(value || ''))

  );
  this.futureDateDisable();
this.setDates();
}

optionSelected(option: string): void {
  this.selectedOption = option; // Keep track of the selected option

}

private _FILTER(value: string): string[] {
  const searchvalue = value.toLocaleLowerCase();
  return this.typearray.filter(option => option.toLocaleLowerCase().includes(searchvalue));
}

//date picker
minDate!: any;
maxDate!: any;
todayDate!:any
month!:any;
changedFormat!:any;
events: string[] = [];
selectedDate!:any;
yesterdayDate!:any;
date = new FormControl(new Date());


addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
this.selectedDate = event.value;
const changeYear = this.selectedDate.getFullYear();
let changeMonth = this.selectedDate.getMonth() + 1; // Month is zero-based, so we add 1
let changeDate = this.selectedDate.getDate();

if (changeDate < 10) {
  changeDate = '0' + changeDate;
}

if (changeMonth < 10) {
  changeMonth = '0' + changeMonth;
}

this.changedFormat = changeYear+'-'+changeMonth+'-'+changeDate;
if (type === 'change') {
  if (this.changedFormat) {
    // Set the minToDate to one day after the selected date
    const nextDay = new Date(this.changedFormat);
    nextDay.setDate(nextDay.getDate() + 1);
    this.minDate = nextDay;
  }
}
}
setDates(): void {
const today = new Date();
this.todayDate = today.getDate();
this.month = today.getMonth() + 1;

// Set yesterday's date
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);
this.yesterdayDate = yesterday;

var year = today.getFullYear();
if (this.todayDate < 10) {
  this.todayDate = '0' + this.todayDate;
}
if (this.month < 10) {
  this.month = '0' + this.month;
}

this.maxDate = year + '-' + this.month + '-' + this.todayDate;
}


futureDateDisable(){
var date = new Date();
this.todayDate = date.getDate();
this.month = date.getMonth()+1;
var year = date.getFullYear();

if(this.todayDate < 10){
  this.todayDate = '0' + this.todayDate
}
if(this.month <10){
  this.month = '0'+ this.month
}
this.maxDate = year +'-'+ this.month + '-'+ this.todayDate


  
  
}


clearAll() {
  // Reset other form controls and variables
  this.formcontrol.setValue('');
  this.selectedOption = null;
  this.date = new FormControl(new Date());




}
}