import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { AuthServicesService } from '../../../services/auth-services.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formularioIngresar = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]),
    password:new FormControl('', [Validators.required, Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)]),
    passwordconfirm:new FormControl('', [Validators.required]),    
    nombre:new FormControl('', [Validators.required])
  });

  errorMessage:String='';

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
          this.errorMessage = res.error.sqlMessage;
        }
      }
    )
  }
}
