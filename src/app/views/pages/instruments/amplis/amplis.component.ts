import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../../../services/instrument.service';
import { Instrument } from '../../../interfaces/instruments.interface';

@Component({
  selector: 'app-amplis',
  templateUrl: './amplis.component.html',
  styles: [
  ]
})
export class AmplisComponent implements OnInit {

  constructor(private insService: InstrumentService) { }

  ngOnInit(): void {
  }

  public ampliArray: Instrument[] = this.insService.amplificadores

}
