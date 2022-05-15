import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { AuthServicesService } from '../../../services/auth-services.service';

const emailPattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const passwordPattern = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formularioIngresar = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.maxLength(200),Validators.pattern(emailPattern)]),
    password:new FormControl('', [Validators.required, Validators.maxLength(200), Validators.pattern(passwordPattern)]),
    passwordconfirm:new FormControl('', [Validators.required]),    
    nombre:new FormControl('', [Validators.required, Validators.maxLength(100)])
  });

  errorMessage:String='';

  constructor(private authService:AuthServicesService, private router:Router, private appComponent:AppComponent) { }

  ngOnInit(): void { 
  }

  registrar(){
    this.authService.registrar(this.formularioIngresar.value.email, this.formularioIngresar.value.password, this.formularioIngresar.value.nombre).subscribe(
      {
        next: (res) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('nombre', res.nombre);
          this.appComponent.ngOnInit();
          this.router.navigate(['']);
        },
        error: (res) => {
          this.errorMessage = res.error.sqlMessage;
        }
      }
    )
  }
}
