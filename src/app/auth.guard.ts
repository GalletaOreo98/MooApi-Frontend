import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServicesService } from './services/auth-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private authService:AuthServicesService, private router:Router) {}

  canActivate() {
    if(this.authService.loggedIn()) return true; 
    this.router.navigate(['/login'])
    return false;
  }
  
}
