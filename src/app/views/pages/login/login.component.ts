import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>) { }

  alert: boolean = false;
  
  usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit(){

    if (this.usuarioLogin.value.usuario=="admin" && this.usuarioLogin.value.password=="admin")
    {      
      this.router.navigate(['/add']);      
      this.dialogRef.close(); 
    }
    else
    {
      this.alert = true;      
      setTimeout(() => this.alert=false, 4000);      
    }


  }
}
