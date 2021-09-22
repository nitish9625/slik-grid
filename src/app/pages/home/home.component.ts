import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Column, ColumnPickerExtension, GridOption, Formatter,FieldType } from '@slickgrid-universal/common';

const myCustomeCheckMarkFormatter: Formatter = (row: number, cell: number, value: any,columnDef: Column, DataContex:any)=> value ?`
<i class="fa fa-fire" aria-hidden="true"></i>`: `<i class="fa fa-snowflaKe-o" aria-hidden="true"></li>`

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  columnDefinitions : Column[] = [];
  gridOption: any;
  dataset: any[] =[];

 
  constructor() { 
    
  }

  

  ngOnInit(): void {
    this.columnDefinitions = [
      {id: 'title', name: 'Title', field: 'title', sortable: true},
      {id: 'duration', name:'Duration(days)', field: 'duration', sortable: true},
      {id: '%',name:'% Complete', field: 'percentComplete', sortable: true},
      {id: 'start', name: 'start', field: 'start'},
      {id: 'finish', name: 'Finished', field: 'finish'},
      {id: 'efort-driven', name: 'Effort Driven',field: 'effortDriven',sortable: true}
    ];
    this.gridOption = {
      frozenColumn: 1,
      enableAutoResize: true,
      enableCellNavigation: true,
      enableSorting: true,
      createPreHeaderPanel: true,
      showPreHeaderPanel: true,
      preHeaderPanelHeight: 25,
      explicitInitialization: true,
      colspanCallback: this.renderDifferentColspan
    };
    this.getData();

  //   // for demo purpose
  //   for(let i = 0; i<20; i++){
  //     const randomYear = 2000 + Math.floor(Math.random() *10);
  //     const randomMonth = Math.floor(Math.random() * 11);
  //     const randomDay = Math.floor((Math.random() *28));
  //     const randomPercent = Math.round(Math.random() *100);

  //     this.dataset[i] = {
  //       id: i,
  //       title: 'Task' + i,
  //       duration: Math.round(Math.random() *100) + '',
  //       perecentComplete: randomPercent,
  //       start: `${randomMonth}/${randomDay}/${randomYear}`,
  //       finish: `${randomMonth}/${randomDay}/${randomYear}`,
  //       efortDriven: (i%5===0)
  //     };
  //   }
  }

  getData(){
    const mockDataset=[];
    for (let i = 0; i<50; i++){
      const randomYear = 2000 + Math.floor(Math.random() *10);
      const randomMonth = Math.floor(Math.random() *11);
      const randomDay = Math.floor(Math.random() *100);
      mockDataset[i] = {
        id:i,
        title: 'Task' +i,
        duration: '5 days',
        percentComplete: Math.round(Math.random() * 100),
        start: `${randomMonth}/${randomDay}/${randomYear}`,
        finish: `${randomMonth}/${randomDay}/${randomYear}`,
        effortDriven: (i%5==0)
      };
    }
    this.dataset = mockDataset;

   
  }
  renderDifferentColspan(item: any){
    if(item.id % 2 ===1){
      return{
        columns: {
          duration: {
            colspan: 3
          }
        }
      };
      
      }else{
        return{
          columns:{
            0:{
              colspan: '*'
            }
          }
        };
    }
  }
  

}
