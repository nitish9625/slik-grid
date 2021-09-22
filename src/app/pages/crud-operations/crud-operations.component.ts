import { ApiService } from './../../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { Crud } from './crud-operation.model';


@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styleUrls: ['./crud-operations.component.css']
})
export class CrudOperationsComponent implements OnInit {
  formValue !: FormGroup;
  crudModelObj : Crud= new Crud();
  allData !: any;
  showAdd !:boolean;
  showUpdate !:boolean;

  AddNow = false;

  // Validate form
  
  
 

  constructor(private formbuilder: FormBuilder, private api:ApiService) { 
   
  }

 
  ngOnInit(): void{
    this.formValue = this.formbuilder.group({
      firstName:['',[Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern("[a-zA-Z ]*")]],
      lastName:['',[Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern("[a-zA-Z ]*")]],
      mobile:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    })
    this.getAllData();

    
    // rective form 
   
  }

  get f(){
    return this.formValue.controls;
  }

  

  clickAddData(){
    this.formValue.reset()
    this.showAdd = true;
    this.showUpdate = false;
  }
postCrudDetails(){
  this.crudModelObj.firstName = this.formValue.value.firstName;
  this.crudModelObj.lastName = this.formValue.value.lastName;
  this.crudModelObj.mobile = this.formValue.value.mobile;
  this.crudModelObj.email = this.formValue.value.email;

  this.api.getPost(this.crudModelObj)
  .subscribe(res=>{
    console.log(res);
    alert("Data Addedd Successfull!");
    let ref = document.getElementById('cancel');
    ref?.click();
    this.formValue.reset();
    this.getAllData();
  },
  err=>{
    alert("Something went to wrong?");
  })
}

getAllData(){
  this.api.getData()
  .subscribe(res=>{
    this.allData = res;
  })
}

deleteData(row: any){
  this.api.getDelete(row.id)
  .subscribe(res=>{
    alert('data has been deleted');
    this.getAllData();
  })
}

getEdit(row: any){
  this.showAdd = false;
    this.showUpdate = true;
  this.crudModelObj.id = row.id;
  this.formValue.controls['firstName'].setValue(row.firstName)
  this.formValue.controls['lastName'].setValue(row.lastName)
  this.formValue.controls['mobile'].setValue(row.mobile)
  this.formValue.controls['email'].setValue(row.email)
  
}

updateDetails(){
  this.crudModelObj.firstName = this.formValue.value.firstName;
  this.crudModelObj.lastName = this.formValue.value.lastName;
  this.crudModelObj.mobile = this.formValue.value.mobile;
  this.crudModelObj.email = this.formValue.value.email;

  this.api.getUpdate(this.crudModelObj, this.crudModelObj.id)
  .subscribe(res=>{
    alert('updated successfully');

    let ref = document.getElementById('cancel');
    ref?.click();
    this.formValue.reset();
    this.getAllData();
  })
}

}
