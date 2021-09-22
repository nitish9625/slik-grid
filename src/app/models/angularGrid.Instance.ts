/*import{
BackendService,
ExtensionList,
ExtensionService,
FilterService,
GridEventService,
GridService,
GridStateService,
GroupingAndColspanService,
PaginationService,
ResizerService,
SlickDataView,
SlickGrid,
SortService,
TreeDataService
} from '@slickgrid-universal/common'


export interface AngularGridInstance{

    // slick Data view 
    dataView: SlickDataView;

    // slick grid 
    slickGrid: SlickGrid;

    // SlickGrid extensions (external controls/ plugins)

    extensions: ExtensionList<any, any>;

    // methods

    destroy: (emptyDomElementContainer?: boolean) => void;

    // Service
    // backend services
    backendService?: BackendService;

    // Extension (plugin & controls) Service
    extensionService: ExtensionService;


    // filter Service
    filterService: FilterService;

    // GridService (grid extra functionality)
    gridService: GridService;

    // Grid Event Service
    gridEventService: GridEventService;

    // Grid State Service
    gridStateService: GridStateService;

    // grouping and colspan service
    groupingService: GroupingAndColspanService;

    // pagination service
    paginationService?:PaginationService;

    // Resize Service

    resizerService: ResizerService;

    // sort service
    sortService: SortService;

    // Tree data view source
    treeDataService:TreeDataService;
}*/

import {
    BackendService,
    ExtensionList,
    ExtensionService,
    FilterService,
    GridEventService,
    GridService,
    GridStateService,
    GroupingAndColspanService,
    PaginationService,
    ResizerService,
    SlickDataView,
    SlickGrid,
    SortService,
    TreeDataService
  } from '@slickgrid-universal/common';
  
  export interface AngularGridInstance {
    /** Slick DataView object */
    dataView: SlickDataView;
  
    /** Slick Grid object */
    slickGrid: SlickGrid;
  
    /** SlickGrid extensions (external controls/plugins) */
    extensions: ExtensionList<any, any>;
  
    // --
    // Methods
    /** Dispose of the grid and optionally empty the DOM element grid container as well */
    destroy: (emptyDomElementContainer?: boolean) => void;
  
    // --
    // Services
  
    /** Backend Service, when available */
    backendService?: BackendService;
  
    /** Extension (Plugins & Controls) Service */
    extensionService: ExtensionService;
  
    /** Filter Service */
    filterService: FilterService;
  
    /** Grid Service (grid extra functionalities) */
    gridService: GridService;
  
    /** Grid Events Service */
    gridEventService: GridEventService;
  
    /** Grid State Service */
    gridStateService: GridStateService;
  
    /** Grouping (and colspan) Service */
    groupingService: GroupingAndColspanService;
  
    /** Pagination Service (allows you to programmatically go to first/last page, etc...) */
    paginationService?: PaginationService;
  
    /** Resizer Service (including auto-resize) */
    resizerService: ResizerService;
  
    /** Sort Service */
    sortService: SortService;
  
    /** Tree Data View Service */
    treeDataService: TreeDataService;
  }