
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { PageNotFoundComponent } from './not-found/page-not-found/page-not-found.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';



const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},

  {path:'login', component:LoginComponent},
  {path:'Signup', component:SignupComponent},
  {path:'nav', component:NavComponent},
  
  {
    path: 'admin', loadChildren:()=> import('./admin/admin.module')
    .then(mod=>mod.AdminModule)
  },
  {
    path: 'pages', loadChildren:()=> import('./pages/page-module/page-module.module')
    .then(mod=>mod.PageModuleModule)
  },


  {
    path:'**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
