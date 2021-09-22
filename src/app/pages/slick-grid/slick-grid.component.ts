import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { SlickgridService } from 'src/app/services/slickgrid.service';

@Component({
  selector: 'app-slick-grid',
  templateUrl: './slick-grid.component.html',
  styleUrls: ['./slick-grid.component.css']
})
export class SlickGridComponent implements OnInit {
  title="hello"
  data:any=[];
 
  constructor(private service: SlickgridService) {
    this.service.getData().subscribe(data=>{
      console.log(data);
      this.data = data
     
    })
  }
   
  ngOnInit(): void {
    
  }
}
