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

  public ampliArray: Instrument[] = []

  constructor(private insService: InstrumentService) { }

  ngOnInit(): void {
    this.insService.getProductos()
      .subscribe( prod => {
        this.ampliArray = prod.filter( a => a.tipoProductoId == 2)
      })
  }

}
