import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageModuleRoutingModule } from './page-module-routing.module';


import { AngularSlickgridModule, GlobalGridOptions} from 'angular-slickgrid';
import { MatButtonModule } from '@angular/material/button'




@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    PageModuleRoutingModule,
    AngularSlickgridModule,
    MatButtonModule,
    
  ]
})
export class PageModuleModule { }
