import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServicesService } from './auth-services.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private authService:AuthServicesService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const tokenizeRequest = req.clone({
        setHeaders: {
          accesstoken: `${this.authService.getToken()}`
        }
      })

      return next.handle(tokenizeRequest);
  }

}
