import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user: Login = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  login() {
    this.user = this.logForm.value;
    this.authService.login( this.user )
      .subscribe( resp => {
        console.log( resp )
        if(resp.role == 'admin') {
          this.router.navigate(['/add'])
        }else{
          this.router.navigate([''])
        }
      })
  }

}
