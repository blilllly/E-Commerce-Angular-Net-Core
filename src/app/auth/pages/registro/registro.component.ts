import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UsuarioNuevo } from '../../interfaces/auth.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  userN: UsuarioNuevo = {
    nombre: '',
    apellidos: '',
    email: '',
    password: ''
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registro: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required ] ],
    apellidos: [ '', [ Validators.required ] ],
    email: [ '', [ Validators.required, Validators.email ] ],
    passwords: this.fb.group({
      pass1: [ '', [ Validators.required ] ],
      pass2: [ '', [ Validators.required ] ]
    }, {validator: this.passConf})
  })

  private passConf( frm: AbstractControl ) {
    return frm.get('pass1')?.value === frm.get('pass2')?.value ? null : { NotEqual: true };
  }

  registrarse(){
    this.userN.nombre = this.registro.get('nombre')?.value;
    this.userN.apellidos = this.registro.get('apellidos')?.value;
    this.userN.email = this.registro.get('email')?.value;
    this.userN.password = this.registro.get('passwords.pass2')?.value;
    // console.log(this.userN)
    this.authService.registro(this.userN)
      .subscribe( resp => {
        console.log( resp )
        if(resp.token)
        this.router.navigate([''])
      })
  }

}
