import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QaService } from '../../services/qa.service';
import { Respuestas, Preguntas } from '../../interfaces/instruments.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-respuesta-input',
  templateUrl: './respuesta-input.component.html',
  styleUrls: ['./respuesta-input.component.css']
})
export class RespuestaInputComponent implements OnInit {

  res: Respuestas = {
    preguntaId:       0,
    textoRespuesta:   '',
    tituloRespuesta:  '',
    usuarioRespuesta: '',
  }

  constructor(
    private qaService: QaService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  id: string = this.route.snapshot.paramMap.get('id')!;

  ngOnInit(): void {

    this.qaService.getPreguntaXId(this.id)
      .subscribe( pre => {
        this.resp.get('pregunta')?.setValue(pre.textoPregunta)
      })
    
  }

  resp: FormGroup = this.fb.group({
    pregunta: ['', [Validators.required]],
    textoRespuesta: ['', [Validators.required]],
    tituloRespuesta: ['', [Validators.required]],
    usuarioRespuesta: ['', [Validators.required]]
  })

  addResp() {
    this.res.preguntaId = Number(this.id);
    this.res.textoRespuesta = this.resp.get('textoRespuesta')?.value;
    this.res.tituloRespuesta = this.resp.get('tituloRespuesta')?.value;
    this.res.usuarioRespuesta = this.resp.get('usuarioRespuesta')?.value;
    this.qaService.postRespuesta(this.res)
      .subscribe( ss => {
        this.snackSuccess(`${ss.tituloRespuesta} se añadió correctamente.`)
        this.router.navigate([ '/preguntas' ])
      })
  }

  snackSuccess( msj: string ) {
    this._snackBar.open( msj, 'ok!', { duration: 2500 } )
  }

}
