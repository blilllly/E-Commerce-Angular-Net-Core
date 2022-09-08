import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QaService } from '../../services/qa.service';
import { Preguntas } from '../../interfaces/instruments.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pregunta-input',
  templateUrl: './pregunta-input.component.html',
  styleUrls: ['./pregunta-input.component.css']
})
export class PreguntaInputComponent implements OnInit {

  constructor(private qaService: QaService, private router: Router) { }

  ngOnInit(): void {
  }

  preg = new FormGroup ({
    id: new FormControl(0, Validators.required),
    nombre: new FormControl('', Validators.required),
    titulo: new FormControl('', Validators.required),
    contenido: new FormControl('', Validators.required)
  })

  addPreg() {
    this.qaService.addPreg(this.preg.value as Preguntas)
    this.router.navigate([ '/preguntas' ])
  }

}
