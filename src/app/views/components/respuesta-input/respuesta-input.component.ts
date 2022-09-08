import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QaService } from '../../services/qa.service';
import { Respuestas } from '../../interfaces/instruments.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-respuesta-input',
  templateUrl: './respuesta-input.component.html',
  styleUrls: ['./respuesta-input.component.css']
})
export class RespuestaInputComponent implements OnInit {

  constructor(private qaService: QaService, private router: Router, private route: ActivatedRoute) { }

  id: string = this.route.snapshot.paramMap.get('id')!;

  ngOnInit(): void {
  }

  resp = new FormGroup ({
    idPre: new FormControl(Number(this.id), Validators.required),
    nombre: new FormControl('', Validators.required),
    titulo: new FormControl('', Validators.required),
    contenido: new FormControl('', Validators.required)
  })

  addResp() {
    this.qaService.addResp(this.resp.value as Respuestas)
    this.router.navigate([ '/preguntas' ])
  }
}
