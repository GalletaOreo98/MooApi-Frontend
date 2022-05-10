import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthServicesService } from 'src/app/services/auth-services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioIngresar = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required])
  });

  errorMessage:String = '';

  constructor(private authService:AuthServicesService, private router:Router, private appComponent:AppComponent) { }

  ngOnInit(): void {
  }

  ingresar(){
    this.authService.login(this.formularioIngresar.value.email, this.formularioIngresar.value.password).subscribe(
      {
        next: (res:any) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('nombre', res.nombre);
          this.appComponent.ngOnInit();
          this.router.navigate(['']); 
        },
        error: (res:any) => {
          this.errorMessage = res.error.message;          
        }
      }
    )
  }

}
