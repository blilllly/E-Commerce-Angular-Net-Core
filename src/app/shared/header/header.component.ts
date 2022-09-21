import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { CarritoComponent } from '../../views/components/carrito/carrito.component';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ls = localStorage;
  url: string = this.router.url

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  navGuitar() {
    this.router.navigate([ '/guitarras' ])
  }

  navAmplis() {
    this.router.navigate([ '/amplis' ])
  }

  navBajos() {
    this.router.navigate([ '/bajos' ])
  }

  navMicros() {
    this.router.navigate([ '/micros' ])
  }

  navPreguntas() {
    this.router.navigate([ '/preguntas' ])
  }

  navHome() {
    this.router.navigate([ '/' ])
  }

  abrirCarrito() {
    this.dialog.open(CarritoComponent)
  }

  logout() {
    this.authService.logout()
    this.router.navigate([''])
  }

  navegar() {
    if( localStorage.getItem('role') === 'admin') {
      this.router.navigate(['/add'])
    }else{
      return
    }
  }

}
