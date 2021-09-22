/*import{
    Column,
    ColumnFilter,
    Filter,
    FilterArguments,
    FilterCallback,
    GridOption,
    OperatorType,
    OperatorString,
    SearchTerm,
    SlickGrid
} from 'angular-slickgrid'

declare const $ : any;

export class CustomInputFilter implements Filter{
    private _clearFilterTriggered = false;
    private _shouldTriggerQuery = true;
    private $filterElm: any;
    grid!: SlickGrid;
    searchTerms: SearchTerm[]=[];
    columnDef!: Column;
    callback!: FilterCallback;
    operator: OperatorType | OperatorString = OperatorType.equal;

    constructor(){}

    get columnFilter(): ColumnFilter{
        return this.columnDef && this.columnDef.filter || {};
    }

    get gridOptions(): GridOption{
        return this.grid?.getOptions?.() as GridOption;
    }

    init(args: FilterArguments){
        this.grid = args.grid as SlickGrid;
        this.callback = args.callback;
        this.columnDef = args.columnDef;
        this.searchTerms = (args.hasownProperty('searchTerms')? args.searchTerms: []) ||[];
        
    }
}*/