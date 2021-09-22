import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Column,
          FieldType,
          Formatters,
          GridOption,
          GridStateChange,
          GridStateType,
          TreeToggledItem,
          AngularGridInstance,
        } from 'angular-slickgrid';

const NB_ITEMS = 500;

@Component({
  selector: 'app-parent-child-row',
  templateUrl: './parent-child-row.component.html',
  styleUrls: ['./parent-child-row.component.css']
})
export class ParentChildRowComponent implements OnInit {

 

  angularGrid!: AngularGridInstance;
  dataViewObj: any;
  gridObj: any;
  gridOptions!: GridOption;
  columnDefinitions!: Column[];
  dataset!: any[];
  datasetHierarchical: any[] = [];
  loadingClass = '';
  isLargeDataset = false;
  hasNoExpandCollapseChanged = true;
  treeToggleItems: TreeToggledItem[] = [];

  constructor() { }

  ngOnInit(): void {
    // define the grid options & columns and then create the grid itself
    this.defineGrid();

    // mock a dataset
    this.dataset = this.loadData(NB_ITEMS);
  }

  defineGrid() {
    this.columnDefinitions = [
      {
        id: 'title', name: 'Title', field: 'title', width: 220, cssClass: 'cell-title',
        exportWithFormatter: false,
        queryFieldSorter: 'id', type: FieldType.string,
        formatter: Formatters.tree, exportCustomFormatter: Formatters.treeExport
      },
      { id: 'duration', name: 'Duration', field: 'duration', minWidth: 90,},
      {
        id: 'percentComplete', name: '% Complete', field: 'percentComplete',
        minWidth: 120, maxWidth: 200, exportWithFormatter: false,
       
        formatter: Formatters.percentCompleteBar, type: FieldType.number,
      },
      {
        id: 'start', name: 'Start', field: 'start', minWidth: 60,
        type: FieldType.dateIso, 
        formatter: Formatters.dateIso,
      },
      {
        id: 'finish', name: 'Finish', field: 'finish', minWidth: 60,
        type: FieldType.dateIso, 
       
        formatter: Formatters.dateIso,
      },
      {
        id: 'effortDriven', name: 'Effort Driven', width: 80, minWidth: 20, maxWidth: 80, cssClass: 'cell-effort-driven', field: 'effortDriven',
        exportWithFormatter: false,
        formatter: Formatters.checkmark, cannotTriggerInsert: true,

      }
    ];

    this.gridOptions = {
      autoResize: {
        container: '#demo-container',
        rightPadding: 10
      },
      enableAutoSizeColumns: true,
      enableAutoResize: true,
      enableFiltering: true,
      showCustomFooter: true, 
      enableTreeData: true, // you must enable this flag for the filtering & sorting to work as expected
      treeDataOptions: {
        columnId: 'title',
        parentPropName: 'parentId',
        // this is optional, you can define the tree level property name that will be used for the sorting/indentation, internally it will use "__treeLevel"
        levelPropName: 'treeLevel',
        indentMarginLeft: 15,
        initiallyCollapsed: true,

        // you can optionally sort by a different column and/or sort direction
        // this is the recommend approach, unless you are 100% that your original array is already sorted (in most cases it's not)
        initialSort: {
          columnId: 'title',
          direction: 'ASC'
        },
        // we can also add a custom Formatter just for the title text portion
       
      },
      multiColumnSort: false, // multi-column sorting is not supported with Tree Data, so you need to disable it
      presets: {
        treeData: { toggledItems: [{ itemId: 1, isCollapsed: false }] },
      },

      // change header/cell row height for material design theme
      headerRowHeight: 45,
      rowHeight: 40,
      // if you're dealing with lots of data, it is recommended to use the filter debounce
      

    };
  }

  angularGridReady(angularGrid: AngularGridInstance) {
    this.angularGrid = angularGrid;
    this.gridObj = angularGrid.slickGrid;
    this.dataViewObj = angularGrid.dataView;
  }

  
  addNewRow() {
    const newId = this.dataViewObj.getItemCount();
    const parentPropName = 'parentId';
    const treeLevelPropName = 'treeLevel'; // if undefined in your options, the default prop name is "__treeLevel"
    const newTreeLevel = 1;

    // find first parent object and add the new item as a child
    const childItemFound = this.dataViewObj.getItems().find((item: any) => item[treeLevelPropName] === newTreeLevel);
    const parentItemFound = this.dataViewObj.getItemByIdx(childItemFound[parentPropName]);

    if (childItemFound && parentItemFound) {
      const newItem = {
        id: newId,
        parentId: parentItemFound.id,
        title: `Task ${newId}`,
        duration: '1 day',
        percentComplete: 99,
        start: new Date(),
        finish: new Date(),
        effortDriven: false
      };

      // use the Grid Service to insert the item,
      // it will also internally take care of updating & resorting the hierarchical dataset
      this.angularGrid.gridService.addItem(newItem);
    }
  }

  

  loadData(rowCount: number) {
    this.isLargeDataset = rowCount > 5000; // we'll show a spinner when it's large, else don't show show since it should be fast enough
    let indent = 0;
    const parents = [];
    const data = [];

    // prepare the data
    for (let i = 0; i < rowCount; i++) {
      const randomYear = 2000 + Math.floor(Math.random() * 10);
      const randomMonth = Math.floor(Math.random() * 11);
      const randomDay = Math.floor((Math.random() * 29));
      const item: any = (data[i] = {});
      let parentId;

      
      if (i === 1 || i === 0) {
        indent = 0;
        parents.pop();
      } if (i === 3) {
        indent = 1;
      } else if (i === 2 || i === 4 || (Math.random() > 0.8 && i > 0 && indent < 3 && i - 1 !== 0 && i - 1 !== 2)) { // also make sure Task 0, 2 remains empty
        indent++;
        parents.push(i - 1);
      } else if ((Math.random() < 0.3 && indent > 0)) {
        indent--;
        parents.pop();
      }

      if (parents.length > 0) {
        parentId = parents[parents.length - 1];
      } else {
        parentId = null;
      }

      item['id'] = i;
      item['parentId'] = parentId;
      item['title'] = `Task ${i}`;
      item['duration'] = '5 days';
      item['percentComplete'] = Math.round(Math.random() * 100);
      item['start'] = new Date(randomYear, randomMonth, randomDay);
      item['finish'] = new Date(randomYear, (randomMonth + 1), randomDay);
      item['effortDriven'] = (i % 5 === 0);
    }
    this.dataset = data;
    return data;
  }

  /** Dispatched event of a Grid State Changed event */
  handleOnGridStateChanged(gridStateChange: GridStateChange) {
    this.hasNoExpandCollapseChanged = false;

    if (gridStateChange.change!.type === GridStateType.treeData) {
      console.log('Tree Data gridStateChange', gridStateChange.gridState!.treeData);
      this.treeToggleItems = gridStateChange.gridState!.treeData!.toggledItems as TreeToggledItem[];
    }
  }


}