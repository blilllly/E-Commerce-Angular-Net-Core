import { Component, OnInit } from '@angular/core';
import { Instrument } from '../../../interfaces/instruments.interface';
import { InstrumentService } from '../../../services/instrument.service';

@Component({
  selector: 'app-guitarras',
  templateUrl: './guitarras.component.html',
  styleUrls: ['./guitarras.component.css']
})
export class GuitarrasComponent implements OnInit {
  
  guitarArray: Instrument[] = [];

  constructor(private insService: InstrumentService) { }

  ngOnInit(): void {
    this.insService.getProductos()
      .subscribe( prod => {
        this.guitarArray = prod.filter( g => g.tipoProductoId == 1 )
      })
  }

}
