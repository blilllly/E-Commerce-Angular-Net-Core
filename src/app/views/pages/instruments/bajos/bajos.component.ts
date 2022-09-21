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
  
  public bajoArray: Instrument[] = [];

  constructor(private insService: InstrumentService) { }

  ngOnInit(): void {
    this.insService.getProductos()
      .subscribe( prod => {
        this.bajoArray = prod.filter( b => b.tipoProductoId == 3 )
      })
  }

}
