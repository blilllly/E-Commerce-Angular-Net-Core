import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { QaService } from '../../services/qa.service';
import { Preguntas } from '../../interfaces/instruments.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs';

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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    if( !this.router.url.includes('editarPreg') ) { return }

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.qaService.getPreguntaXId(id) )
      )
      .subscribe( pre => {
        this.pregunta = pre
        this.preg.get('usuarioPregunta')?.setValue(this.pregunta.usuarioPregunta)
        this.preg.get('tituloPregunta')?.setValue(this.pregunta.tituloPregunta)
        this.preg.get('textoPregunta')?.setValue(this.pregunta.textoPregunta)
      } )
  }

  preg: FormGroup = this.fb.group ({
    usuarioPregunta: [ '', [Validators.required] ],
    tituloPregunta: [ '', [Validators.required] ],
    textoPregunta: [ '', [Validators.required] ]
  })

  guardar() {
    if( this.pregunta.id ) {
      this.pregunta.usuarioPregunta = this.preg.get('usuarioPregunta')?.value
      this.pregunta.tituloPregunta = this.preg.get('tituloPregunta')?.value
      this.pregunta.textoPregunta = this.preg.get('textoPregunta')?.value

      this.qaService.putPregunta( this.pregunta )
        .subscribe( pre => {
          this.router.navigate([ '/preguntas' ])
          this.snackSuccess(`Se editó correctamente.`)
        })
    }
    else {
      this.pregunta = this.preg.value as Preguntas

      this.qaService.postPregunta( this.pregunta )
        .subscribe( pre => {
          this.router.navigate([ '/preguntas' ])
          this.snackSuccess(` se añadió correctamente.`)
        })
    }
    console.log(this.pregunta)
  }

  snackSuccess( msj: string ) {
    this._snackBar.open( msj, 'ok!', { duration: 2500 } )
  }

}
