import { fadein } from './../../layouts/route-animation';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[fadein]
})
export class LoginComponent  {

  profileForm = new FormGroup({
    Email: new FormControl
    ('',
    [
      Validators.required,
      Validators.email
    ]
    ),
    Password:new FormControl
    ('',
    [
      Validators.required,
      Validators.minLength(4)
    ]
    ),
    Username:new FormControl
    ('',
    Validators.required
    ),
  });
  profileForm2 = new FormGroup({
    Email2: new FormControl
    ('',
    [
      Validators.required,
      Validators.email
    ]
    ),
    Password2:new FormControl
    ('',
    [
      Validators.required,
      Validators.minLength(4)
    ]
    ),
    Username:new FormControl
    ('',
    Validators.required
    ),
   
    
    
  });
  
  [x: string]: any;
 
  //show hide div variables
  userlogin = true;
  userregister = false;
  
  //Buttons clicks functionalities 
  user_register()
  {
    this.userlogin = false;
    this.userregister = true;
  }
  user_login()
  {
    this.userlogin = true;
    this.userregister = false;
  }
  get Email(){
    return this.profileForm.get('Email')
  }
  get Password(){
    return this.profileForm.get('Password')
  }
  get Username(){
    return this.profileForm2.get('Username')
  }
  get Email2(){
    return this.profileForm2.get('Email2')
  }
  get Password2(){
    return this.profileForm2.get('Password2')
  }

  submitlogin(f:any){
    console.log(f.value);
  }
  submitreg(r:any){
    console.log(r.value);
  }

}
