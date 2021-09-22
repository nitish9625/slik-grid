import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'slik-grid';
  
  allData: any;
  
constructor(){}

OnInit():void{
  console.log(localStorage.getItem('user'));
}
  
}
