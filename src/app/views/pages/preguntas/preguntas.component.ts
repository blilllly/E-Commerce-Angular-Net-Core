import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preguntas, Respuestas } from '../../interfaces/instruments.interface';
import { QaService } from '../../services/qa.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  public pregArray: Preguntas[] = [];
  public respArray: Respuestas[] = [];

  constructor(
    private router: Router,
    private qaService: QaService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.qaService.getPreguntas()
      .subscribe( preguntas => {
        this.pregArray = preguntas
      })

    this.qaService.getRespuestas()
      .subscribe( respuestas => {
        this.respArray = respuestas
      })
  }

  borrar( id: number ) {
    this.qaService.deleteRespuesta(id)
      .subscribe( del => {
        this.snackSuccess('se eliminó correctamente.')
      })
  }

  newPreg() {
    this.router.navigate([ '/pregInput' ])
  }

  snackSuccess( msj: string ) {
    this._snackBar.open( msj, 'ok!', { duration: 2500 } )
  }

}
