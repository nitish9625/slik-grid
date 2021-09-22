import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AngularSlickgridModule, GlobalGridOptions} from 'angular-slickgrid';
import { SlickGridComponent } from './pages/slick-grid/slick-grid.component';
import { SlickPaginationComponent } from 'angular-slickgrid';
import { GridOption } from 'angular-slickgrid';
import { AngularSlickgridComponent } from 'angular-slickgrid';
import { FormateGridComponent } from './pages/formate-grid/formate-grid.component';
import { PageNotFoundComponent } from './not-found/page-not-found/page-not-found.component';
import { SlickGridMenuComponent } from './pages/slick-grid-menu/slick-grid-menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageModuleModule } from './pages/page-module/page-module.module';
import { HttpClientModule } from '@angular/common/http';
import { DxTreeListModule } from 'devextreme-angular';
import { AdminModule } from './admin/admin.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParentChildRowComponent } from './pages/parent-child-row/parent-child-row.component';
import { RowDetailComponent } from './pages/row-detail/row-detail.component';
import { RowDetailViewComponent } from './pages/row-detail-view/row-detail-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientDataComponent } from './pages/http-client-data/http-client-data.component';
import { CrudOperationsComponent } from './pages/crud-operations/crud-operations.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NavComponent } from './nav/nav.component';
import { AutogaurdService } from './autogaurd.service';






@NgModule({
  declarations: [
    AppComponent,
    SlickGridMenuComponent,
    HomeComponent,
    SlickGridComponent,
    FormateGridComponent,
    ParentChildRowComponent,
    RowDetailComponent,
    RowDetailViewComponent,
    HttpClientDataComponent,
    CrudOperationsComponent,
    LoginComponent,
    SignupComponent,
    NavComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModuleModule,
    AngularSlickgridModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    DxTreeListModule,
    AdminModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    
   
  
  ],
  providers: [AutogaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
