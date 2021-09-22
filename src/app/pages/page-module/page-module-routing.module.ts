import { CrudOperationsComponent } from './../crud-operations/crud-operations.component';
import { HttpClientDataComponent } from './../http-client-data/http-client-data.component';
import { ParentChildRowComponent } from './../parent-child-row/parent-child-row.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FormateGridComponent } from '../formate-grid/formate-grid.component';
import { SlickGridComponent} from '../slick-grid/slick-grid.component';
import { RowDetailComponent } from '../row-detail/row-detail.component';
import { AutogaurdService } from 'src/app/autogaurd.service';

const routes: Routes = [
  {path:'home', component: HomeComponent, canActivate:[AutogaurdService]},
  {path:'slickgrid', component: SlickGridComponent,canActivate:[AutogaurdService]},
  {path: 'Formategrid', component: FormateGridComponent,canActivate:[AutogaurdService]},
  {path:'parent-child-row', component: ParentChildRowComponent,canActivate:[AutogaurdService]},
  {path:'row-detail', component:RowDetailComponent,canActivate:[AutogaurdService]},
  {path:'http-client', component:HttpClientDataComponent,canActivate:[AutogaurdService]},
  {path:'crud-operation', component:CrudOperationsComponent,canActivate:[AutogaurdService]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageModuleRoutingModule { }
