import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private httpClient:HttpClient, private router:Router, private appComponent:AppComponent) { }

  login(email:String, password:String) {
    return this.httpClient.post(`https://moo-api-facebook.herokuapp.com/api/signin`, {email, password});
  }

  registrar(email:String, password:String, nombre:String) {
    return this.httpClient.post(`https://moo-api-facebook.herokuapp.com/api/signup`, {email, password, nombre});
  }

  loggedIn(): Boolean{
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('nombre');
    this.appComponent.ngOnInit();
    this.router.navigate(['/auth/login'])
  }
}
