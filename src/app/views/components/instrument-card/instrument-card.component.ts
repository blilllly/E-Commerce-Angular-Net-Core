import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Instrument, ItemCarrito } from '../../interfaces/instruments.interface';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-instrument-card',
  templateUrl: './instrument-card.component.html',
  styleUrls: ['./instrument-card.component.css']
})
export class InstrumentCardComponent implements OnInit {

  itemCarrito: ItemCarrito = {
    instrument:{
      marca: '',
      modelo: '',
      precio: 0,
      tipoProductoId: 0,
    }
  }

  constructor(private _snackBar: MatSnackBar, private carService: CarritoService) { }

  ngOnInit(): void {
  }

  @Input() items: Instrument[]= [];

  anadirCarrito(itemr: Instrument) {
    this.itemCarrito.instrument = itemr
    
    let itemNuevo = Object.assign({}, this.itemCarrito)

    if( this.carService.anadir(itemNuevo) ) {
      this.snack(`${this.itemCarrito.instrument.marca} ${this.itemCarrito.instrument.modelo} se añadió al carrito.`)
    }else{
      this.snack(`${this.itemCarrito.instrument.marca} ${this.itemCarrito.instrument.modelo} se sumó al carrito.`)
    }
  }

  snack(msj: string) {
    this._snackBar.open( msj, 'ok!', { duration: 2500 } )
  }

  // anadirCarrito(item: Instrument) {
  //   if(this.carService.anadir(item)){
  //     this._snackBar.open(
  //       `${ item.marca } ${item.modelo} se añadió al carrito`,
  //       undefined,
  //       {
  //         duration: 2500
  //       }
  //     );
  //   }else{
  //     this._snackBar.open(
  //       `${ item.marca } ${item.modelo} se sumó al carrito`,
  //       undefined,
  //       {
  //         duration: 2500
  //       }
  //     );
  //   }
    
  // }

}
