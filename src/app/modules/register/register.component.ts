import { variable } from '@angular/compiler/src/output/output_ast';
import { fadein } from './../../layouts/route-animation';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations:[fadein]
})
export class RegisterComponent implements OnInit {

  constructor(private service:AuthService) { }

  ngOnInit(): void {
  }
  profileForm2 = new FormGroup({
    Username:new FormControl('',Validators.required),
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
    BirthDate:new FormControl('',Validators.required),
  });
  
  [x: string]: any;
 
  

  get Username(){
    return this.profileForm2.get('Username')
  }
  get Email(){
    return this.profileForm2.get('Email')
  }
  get Password(){
    return this.profileForm2.get('Password')
  }
  get BirthDate(){
    return this.profileForm2.get('BirthDate')
  }

  submitreg(r:any){
    console.log(r.value);
    this.service.createUser(r.value).subscribe(()=>{
      alert("login succsessfull")
    })
  }
  
}
