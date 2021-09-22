import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { AngularSlickgridModule } from 'angular-slickgrid';



@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularSlickgridModule
  ]
})
export class AdminModule { }
