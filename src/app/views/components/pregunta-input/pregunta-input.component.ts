import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QaService } from '../../services/qa.service';
import { Preguntas, Respuestas } from '../../interfaces/instruments.interface';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pregunta-input',
  templateUrl: './pregunta-input.component.html',
  styleUrls: ['./pregunta-input.component.css']
})
export class PreguntaInputComponent implements OnInit {

  pregunta: Preguntas = {
    usuarioPregunta: '',
    tituloPregunta: '',
    textoPregunta: ''
  }

  constructor(
    private qaService: QaService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  preg = new FormGroup ({
    // id: new FormControl(0, Validators.required),
    usuarioPregunta: new FormControl('', Validators.required),
    tituloPregunta: new FormControl('', Validators.required),
    textoPregunta: new FormControl('', Validators.required)
  })

  guardar() {
    this.pregunta = this.preg.value as Preguntas

    this.qaService.postPregunta( this.pregunta )
      .subscribe( pre => {
        this.router.navigate([ '/preguntas' ])
        this.snackSuccess(`${pre.tituloPregunta} se añadió correctamente.`)
      })
  }

  snackSuccess( msj: string ) {
    this._snackBar.open( msj, 'ok!', { duration: 2500 } )
  }

}
