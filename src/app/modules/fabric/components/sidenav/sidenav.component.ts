import { Component } from '@angular/core';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
 
  dropdownOpen: boolean = false;
  tableDropdownOpen: boolean = false;
  viewDropdownOpen: boolean = false;
  loadingTables: boolean = false;
  loadingViews: boolean = false;
  dropdownData: any[] = [];
  loading: boolean = false;
  tableLoading: boolean = false;
  tableItems: string[] = [];
 
  constructor(private service: SidenavService) { }
 
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    if (this.dropdownOpen) {
      this.loadingTables = true;
      this.loadingViews = true;
      this.tableLoading = true;
 
     
      setTimeout(() => {
        this.service.getDropdownData().subscribe(data => {
          this.dropdownData = data;
          this.loadingTables = false;
          this.loadingViews = false;
          this.tableLoading = false;
        });
      }, 2000);
    }
  }
 
  toggleTableDropdown() {
    this.tableDropdownOpen = !this.tableDropdownOpen;
 
   
    // if (this.tableDropdownOpen) {
    //   this.loadTableItems();
    // }
  }
 
  toggleViewDropdown() {
    this.viewDropdownOpen = !this.viewDropdownOpen;
  }
  }
   
