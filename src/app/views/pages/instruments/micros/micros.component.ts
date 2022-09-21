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

  public microArray: Instrument[] = [];

  constructor(private insService: InstrumentService) { }

  ngOnInit(): void {
    this.insService.getProductos()
      .subscribe( prod => {
        this.microArray = prod.filter( m => m.tipoProductoId == 4 )
      })
  }

}
