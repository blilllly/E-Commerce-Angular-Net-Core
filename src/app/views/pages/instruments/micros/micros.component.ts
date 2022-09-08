import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../../../services/instrument.service';
import { Instrument } from '../../../interfaces/instruments.interface';

@Component({
  selector: 'app-micros',
  templateUrl: './micros.component.html',
  styles: [
  ]
})
export class MicrosComponent implements OnInit {

  constructor(private insService: InstrumentService) { }

  ngOnInit(): void {
  }

  public microArray: Instrument[] = this.insService.micros

}
