import { Component, OnInit } from '@angular/core';
import { Instrument } from '../../../interfaces/instruments.interface';
import { InstrumentService } from '../../../services/instrument.service';

@Component({
  selector: 'app-guitarras',
  templateUrl: './guitarras.component.html',
  styleUrls: ['./guitarras.component.css']
})
export class GuitarrasComponent implements OnInit {

  constructor(private insService: InstrumentService) { }

  ngOnInit(): void {
  }

  public guitarArray: Instrument[] = this.insService.guitarras;

}
