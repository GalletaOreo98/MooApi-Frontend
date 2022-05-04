import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthServicesService } from '../services/auth-services.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formularioIngresar = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required]),
    passwordconfirm:new FormControl('', [Validators.required]),    
    nombre:new FormControl('', [Validators.required])
  });

  constructor(private authService:AuthServicesService, private router:Router, private appComponent:AppComponent) { }

  ngOnInit(): void {
  }

  registrar(){
    this.authService.registrar(this.formularioIngresar.value.email, this.formularioIngresar.value.password, this.formularioIngresar.value.nombre).subscribe(
      {
        next: (res:any) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('nombre', res.nombre);
          this.appComponent.ngOnInit();
          this.router.navigate(['']);
        },
        error: (res:any) => {
          console.log(res);
        }
      }
    )
  }
}
