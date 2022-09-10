import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Preguntas } from '../../interfaces/instruments.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public msj: string) { }

  ngOnInit(): void {
  }

}
