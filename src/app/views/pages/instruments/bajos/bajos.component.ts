import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../../../services/instrument.service';
import { Instrument } from '../../../interfaces/instruments.interface';

@Component({
  selector: 'app-bajos',
  templateUrl: './bajos.component.html',
  styles: [
  ]
})
export class BajosComponent implements OnInit {

  constructor(private insService: InstrumentService) { }

  ngOnInit(): void {
  }

  public bajoArray: Instrument[] = this.insService.bajos
}
