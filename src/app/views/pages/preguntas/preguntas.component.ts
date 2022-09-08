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

  constructor(private router: Router, private qaService: QaService) { }

  ngOnInit(): void {
  }

  public pregArray: Preguntas[] = this.qaService.preguntas;

  public respArray: Respuestas[] = this.qaService.respuestas;

  newPreg() {
    this.router.navigate([ '/pregInput' ])
  }

}
