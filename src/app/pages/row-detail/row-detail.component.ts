import { Component, OnInit } from '@angular/core';
import { FieldType,
          AngularGridInstance,
          Column,
          ExtensionList,
          Formatters,
          GridOption,
          Filters
 } from 'angular-slickgrid';
 import { RowDetailViewComponent } from '../row-detail-view/row-detail-view.component';
 import { RowDetailPreloadedComponent } from '../row-preloaded.component';
 

 const NB_ITEMS = 500;

@Component({
  selector: 'app-row-detail',
  templateUrl: './row-detail.component.html',
  styleUrls: ['./row-detail.component.css']
})
export class RowDetailComponent implements OnInit {

  angularGrid!: AngularGridInstance;
  columnDefinitions!: Column[];
  gridOptions!: GridOption;
  dataset!: any[];
  extensions!: ExtensionList<any, any>;
  detailViewRowCount = 9;
  message = '';
  flashAlertType = 'info';

  constructor() { }

  angularGridReady(angularGrid: AngularGridInstance) {
    this.angularGrid = angularGrid;
  }

  get rowDetailInstance(): any {
    return this.angularGrid.extensions.rowDetailView.instance || {}; 
  }

  ngOnInit(): void {
    this.defineGrid();
  }

  /* Define grid Options and Columns */
  defineGrid() {
   

    this.columnDefinitions = [
      { id: 'title', name: 'Title', field: 'title', type: FieldType.string, width: 70},
      { id: 'duration', name: 'Duration (days)', field: 'duration', formatter: Formatters.decimal, params: { minDecimal: 1, maxDecimal: 2 },type: FieldType.number, minWidth: 90},
      { id: 'percent2', name: '% Complete', field: 'percentComplete2', formatter: Formatters.progressBar, type: FieldType.number,minWidth: 100},
      { id: 'start', name: 'Start', field: 'start', formatter: Formatters.dateIso, sortable: true, type: FieldType.date, minWidth: 90, exportWithFormatter: true},
      { id: 'finish', name: 'Finish', field: 'finish', formatter: Formatters.dateIso, sortable: true, type: FieldType.date, minWidth: 90, exportWithFormatter: true},
      {
        id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven',
        minWidth: 100,
        formatter: Formatters.checkmark, type: FieldType.boolean,
      
      }
    ];

    this.gridOptions = {
      autoResize: {
        container: '#demo-container',
        rightPadding: 10
      },
      enableFiltering: true,
      enableRowDetailView: true,
      rowSelectionOptions: {
        selectActiveRow: true
      },
      datasetIdPropertyName: 'rowId', // optionally use a different "id"
      rowDetailView: {
       

        // We can load the "process" asynchronously in 2 different ways (httpClient OR even Promise)
        process: (item) => this.simulateServerAsyncCall(item),
        // process: (item) => this.http.get(`api/item/${item.id}`),

        // load only once and reuse the same item detail without calling process method
        loadOnce: true,

        // limit expanded row to only 1 at a time
        singleRowExpand: false,

      
        useRowClick: true,

       
        panelRows: this.detailViewRowCount,

        
        // Preload View Component
        preloadComponent: RowDetailPreloadedComponent,

        // View Component to load when row detail data is ready
        viewComponent: RowDetailViewComponent,

        // Optionally pass your Parent Component reference to your Child Component (row detail component)
        parent: this
      }
    };

    this.getData();
  }

  getData() {
    // mock a dataset
    this.dataset = [];
    for (let i = 0; i < 1000; i++) {
      const randomYear = 2000 + Math.floor(Math.random() * 10);
      const randomMonth = Math.floor(Math.random() * 11);
      const randomDay = Math.floor((Math.random() * 29));
      const randomPercent = Math.round(Math.random() * 100);

      this.dataset[i] = {
        rowId: i,
        title: 'Task ' + i,
        duration: (i % 33 === 0) ? null : Math.random() * 100 + '',
        percentComplete: randomPercent,
        percentComplete2: randomPercent,
        percentCompleteNumber: randomPercent,
        start: new Date(randomYear, randomMonth, randomDay),
        finish: new Date(randomYear, (randomMonth + 1), randomDay),
        effortDriven: (i % 5 === 0)
      };
    }
  }

  showFlashMessage(message: string, alertType = 'info') {
    this.message = message;
    this.flashAlertType = alertType;
  }

  /** Just for demo purposes, we will simulate an async server call and return more details on the selected row item */
  simulateServerAsyncCall(item: any) {
    // random set of names to use for more item detail
    const randomNames = ['John Doe', 'Jane Doe', 'Chuck Norris', 'Bumblebee', 'Jackie Chan', 'Elvis Presley', 'Bob Marley', 'Mohammed Ali', 'Bruce Lee', 'Rocky Balboa'];

    // fill the template on async delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const itemDetail = item;

        // let's add some extra properties to our item for a better async simulation
        itemDetail.assignee = randomNames[this.randomNumber(0, 10)];
        itemDetail.reporter = randomNames[this.randomNumber(0, 10)];

        // resolve the data after delay specified
        resolve(itemDetail);
      }, 1000);
    });
  }

  private randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}