import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  allUserData: any;
  

  constructor( private router: Router) {

   }

  ngOnInit(): void {
    this.allUserData = localStorage.getItem('user')
    this.allUserData = JSON.parse(this.allUserData);
  
    
  }

  logout(){
    localStorage.removeItem('user');
    localStorage.clear();
    console.log(localStorage.getItem('user'));
    alert("You are logout");
    this.router.navigate(['login']);
    
  }
 

}
