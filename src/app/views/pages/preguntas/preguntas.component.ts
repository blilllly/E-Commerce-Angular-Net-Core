import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preguntas, Respuestas } from '../../interfaces/instruments.interface';
import { QaService } from '../../services/qa.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  public pregArray: Preguntas[] = [];
  public respArray: Respuestas[] = [];

  constructor(private router: Router, private qaService: QaService) { }

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

  newPreg() {
    this.router.navigate([ '/pregInput' ])
  }

}
