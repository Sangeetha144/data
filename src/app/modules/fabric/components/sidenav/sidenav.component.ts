// import { Component } from '@angular/core';
// import { SidenavService } from '../../services/sidenav.service';

// @Component({
//   selector: 'app-sidenav',
//   templateUrl: './sidenav.component.html',
//   styleUrls: ['./sidenav.component.scss']
// })
// export class SidenavComponent {

//   dataShareDropdownOpen = false;
//   dataShareProjects: any[] = [];
//   dbname: any[] = [];
//   showAlternateData = false;
 
//   constructor(private service: SidenavService) {}
 
//   ngOnInit() {
//     this.fetchDataShareProjects();
//   }
 
//   toggleDataShareDropdown() {
//     this.dataShareDropdownOpen = !this.dataShareDropdownOpen;
//   }
 
//   toggleAlternateData() {
//     this.showAlternateData = !this.showAlternateData;
//     if (this.showAlternateData) {
//       this.fetchDbName();
//     }
//   }
 
 
//   fetchDbName() {
//     this.service.getDbName().subscribe((data) => {
//       this.dbname = data;
//       this.showAlternateData = true;
//     });
//   }
 
//   fetchDataShareProjects() {
//     this.service.getDataShareProjects().subscribe(
//       (data) => {
//         this.dataShareProjects = data;
//       },
//       (error) => {
//         console.error('Error fetching data:', error);
//       }
//     );
//   }
// }
   

import { Component } from '@angular/core';
 
@Component({
  selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  dataShareMenuOpen: boolean = false;
  partnerDropdownOpen: string | null = null;
  tablesAndViewsDropdownOpen: string | null = null;
 
  toggleDataShareMenu() {
    this.dataShareMenuOpen = !this.dataShareMenuOpen;
  }
 
  togglePartnerDropdown(partner: string) {
    this.partnerDropdownOpen = this.partnerDropdownOpen === partner ? null : partner;
  }
 
  toggleTablesAndViewsDropdown(partner: string) {
    this.tablesAndViewsDropdownOpen = this.tablesAndViewsDropdownOpen === partner ? null : partner;
  }
}
