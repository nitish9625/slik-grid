import { Component, OnInit } from '@angular/core';
import { SlickDataView, SlickGrid } from '@slickgrid-universal/common';
import { RowDetailComponent } from '../row-detail/row-detail.component';

@Component({
  selector: 'app-row-detail-view',
  templateUrl: './row-detail-view.component.html',
  styleUrls: ['./row-detail-view.component.css']
})
export class RowDetailViewComponent implements OnInit {
  model!: {
    duration: Date;
    percentComplete: number;
    reporter: string;
    start: Date;
    finish: Date;
    effortDriven: boolean;
    assignee: string;
    title: string;
  };

  // you also have access to the following objects (it must match the exact property names shown below)
  addon: any; // row detail addon instance
  grid!: SlickGrid;
  dataView!: SlickDataView;

  // you can also optionally use the Parent Component reference
  // NOTE that you MUST provide it through the "parent" property in your "rowDetail" grid options
  parent!: RowDetailComponent;

  constructor() { }


  deleteRow(model: any) {
    if (confirm(`Are you sure that you want to delete ${model.title}?`)) {
      // you first need to collapse all rows (via the 3rd party addon instance)
      this.addon.collapseAll();

      // then you can delete the item from the dataView
      this.dataView.deleteItem(model.rowId);

      this.parent.showFlashMessage(`Deleted row with ${model.title}`, 'danger');
    }
  }

  
  ngOnInit():void{
    
  }
}
