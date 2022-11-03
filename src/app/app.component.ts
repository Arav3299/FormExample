import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { AnonymousSubject } from 'rxjs/internal/Subject';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormExample';

  departments = ['ECE','EEE','CSE','MECH','CIVIL','MCA']
  roles = ['Admin','Developer','Tech-Lead','Tester']
  genders = ['Male','Female','Prefer Not to Say']
  public birthdate:any;
  public age:any;
  pdoorno:any;
  pstreet:any;
  pcity:any;
  pdistrict:any;
  ppincode:any;
  pstate:any;
  public country:any;
  pcountry:any;
  
  registerForm:FormGroup;

 
  constructor(){
    this.registerForm = new FormGroup({
      role:new FormControl('',[Validators.required]),
      firstname:new FormControl('',Validators.required),
      lastname:new FormControl('',Validators.required), 
      birthdate:new FormControl('',Validators.required),
      age:new FormControl(''),
      department:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      doorno:new FormControl('',Validators.required),
      street:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      pincode:new FormControl('',Validators.required),
      district:new FormControl('',Validators.required),
      state:new FormControl('',Validators.required),
      country:new FormControl('',Validators.required),
      pdoorno:new FormControl('',Validators.required),
      pstreet:new FormControl('',Validators.required),
      pcity:new FormControl('',Validators.required),
      ppincode:new FormControl('',Validators.required),
      pdistrict:new FormControl('',Validators.required),
      pstate:new FormControl('',Validators.required),
      pcountry:new FormControl('',Validators.required),

    });
    this.registerForm.controls['age'].disable();
    this.country="India";
    this.registerForm.controls['country'].disable();

  }
 
 

  get role(){
    return this.registerForm.get('role')
  }

  calculateAge()
  {
    
      if(this.birthdate){
        var dt = new Date(this.birthdate);
       
         var timeDiff = Math.abs(Date.now() - dt.getTime());
         //Used Math.floor instead of Math.ceil
         //so 26 years and 140 days would be considered as 26, not 27.
         this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
       
         console.log(this.age);
         console.log(this.registerForm.get('department')?.value)
         console.log(this.registerForm.get('country')?.value);
         
     }
 }

 hi(){
  // alert();
  this.pdoorno=this.registerForm.get('doorno')?.value
  this.pstreet=this.registerForm.get('street')?.value
  this.pcity=this.registerForm.get('city')?.value
  this.pdistrict=this.registerForm.get('district')?.value
  this.ppincode=this.registerForm.get('pincode')?.value
  this.pstate=this.registerForm.get('state')?.value
  this.pcountry=this.registerForm.get('country')?.value

 }

 bye(){
  this.pdoorno="";
  this.pstreet="";
  this.pcity="";
  this.pdistrict="";
  this.ppincode="";
  this.pstate="";
  this.pcountry="";
 }

//  public onSubmit(): void {
//   this.registerForm = true;
//   if(!this.editProfileForm.valid) {
//     return;
//   }

  // make the submitted variable false when submission is completed.

}



 

  
