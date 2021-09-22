import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public Signupform !: FormGroup;

  constructor( private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.Signupform = this.formBuilder.group({
      fullname:[''],
      email:[''],
      password:[''],
      mobile:['']
    })
  }

  sigup(){
    this.http.post<any>("http://localhost:3000/SignupUser", this.Signupform.value)
    .subscribe(res=>{
      alert("SginUp successful !");
      this.Signupform.reset();
      this.router.navigate(['login'])

    }, err=>{
      alert("something went to wrong !!")
    })
  }
}
