import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/views/pages/login/login.component';
import { CarritoComponent } from '../../views/components/carrito/carrito.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  abrirLogin(){
    this.dialog.open(LoginComponent)
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

}
