import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  constructor(private httpClient:HttpClient, private router:Router) { }

  login(email:String, password:String) {
    return this.httpClient.post(`http://localhost:4000/api/signin`, {email, password});
  }

  registrar(email:String, password:String, nombre:String) {
    return this.httpClient.post(`http://localhost:4000/api/signup`, {email, password, nombre});
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
    this.router.navigate(['/login'])
  }
}
