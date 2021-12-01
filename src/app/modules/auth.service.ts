import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  createUser(info:any){
    
    return this.http.post('https://healthcarewebapp.herokuapp.com/WebApp/Patient/Register/',info);
  }
}
