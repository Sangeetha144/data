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


  ngOnInit(): void {
    this.service.getdata().subscribe((data: any) => {
console.log(data)
      this.cardData = data;
    });
  }
     

}
