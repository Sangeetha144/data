import { Component ,OnInit } from '@angular/core';
import { TileService } from '../Services/tile.service';
@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  cardData: any[] = [];
 
 
  constructor(private service:TileService){}
  getTitle(item: any): string {
    if (item.activeUser) {
      return 'Active User';
    } else if (item.frequentlyUsedProduct) {
      return 'Frequently Used Product';
    } else if (item.activeProduct) {
      return 'Active Product';
    } else if (item.minimalUsedProduct) {
      return 'Minimal Used Product';
    } else if (item.appLoadingTime) {
      return 'App Loading Time';
    }
    return ''; // Add this line to ensure a string is always returned
  }
  
  getValue(item: any): string {
    if (item.activeUser) {
      return item.activeUser;
    } else if (item.frequentlyUsedProduct) {
      return item.frequentlyUsedProduct;
    } else if (item.activeProduct) {
      return item.activeProduct;
    } else if (item.minimalUsedProduct) {
      return item.minimalUsedProduct;
    } else if (item.appLoadingTime) {
      return item.appLoadingTime;
    }
    return ''; // Add this line to ensure a string is always returned
  }
  
  
  ngOnInit(): void {
    this.service.getdata().subscribe((data: any) => {
console.log(data)
      this.cardData = data;
    });
  }
     

}
