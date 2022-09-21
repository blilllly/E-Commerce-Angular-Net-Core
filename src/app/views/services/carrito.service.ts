import { Injectable } from '@angular/core';
import { Instrument, ItemCarrito } from '../interfaces/instruments.interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  // private _carrito: Instrument[] = [];
  private _carrito: ItemCarrito[] = [];

  constructor() { }

  get carrito() {
    return this._carrito;
  }

  anadir(item: ItemCarrito): boolean {
    if( this._carrito.some( x => x.instrument.id == item.instrument.id) ) {
      this.mas(item.instrument.id!)
      return false
    }else{
      item.cantidad = 1
      item.total = item.instrument.precio * item.cantidad;
      this._carrito.push( item )
      return true
    }
  }

  // anadir(item: Instrument): boolean {
    
  //   if( this._carrito.some( x => x.id === item.id ) ){
  //     this.mas(item.id)
  //     return false
  //   }else{
  //     item.cantidad = 1;
  //     item.subtotal = item.precio * item.cantidad;
  //     this._carrito.push( item )
  //     return true
  //   }
  // }

  quitar(id: number) {
    this._carrito.splice( this._carrito.findIndex( (c) => c.instrument.id === id) , 1 );
    // console.log(this._carrito)
  }

  mas(id: number) {
    this._carrito.map( x => {
      if(x.instrument.id === id && x.cantidad! < 5 ) {
        x.cantidad = x.cantidad! + 1;
        x.total = x.cantidad * x.instrument.precio;
        // x.subtotal = x.cantidad * x.precio;
      }
    })
  }

  menos(id: number) {
    this._carrito.map( x => {
      if(x.instrument.id === id && x.cantidad! > 1) {
        x.cantidad = x.cantidad! - 1;
        x.total = x.cantidad * x.instrument.precio;
        // x.subtotal = x.cantidad * x.precio;
      }
    })
  }
}
