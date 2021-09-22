
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @Output() parentFuntion:EventEmitter<any> = new EventEmitter
  public loginForm !:FormGroup
  public userdata !:any;
  showUser: any;

  constructor( private formbuilder: FormBuilder, private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email:[''],
      password:['']
    })

  //  console.log(localStorage.getItem('user'))
  
   
  }

  login(){
    this.http.get<any>("http://localhost:3000/SignupUser")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
          return a.email === this.loginForm.value.email &&  a.password === this.loginForm.value.password 
      })
      if(user){
        alert("Login Successfull");
       localStorage.setItem('user', JSON.stringify(user))
       
        this.loginForm.reset();
        this.router.navigate(['/pages/crud-operation'])
      }else{
        alert("user not Found !!")
      }
    },err=>{
        alert('Something went to Wrong !!');
    })
  } 

  userData(){
    this.showUser = JSON.parse(this.userdata);
  }
 

  
}
