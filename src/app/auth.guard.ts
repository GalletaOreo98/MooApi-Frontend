import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServicesService } from './services/auth-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private authService:AuthServicesService, private router:Router) {}

  canActivate() {
    if(this.authService.loggedIn()) return true; 
    localStorage.removeItem('nombre');
    this.authService.logOut();
    localStorage.removeItem('informado_del_global_chat');
    this.router.navigate(['/login'])
    return false;
  }
  
}
