import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

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

}
