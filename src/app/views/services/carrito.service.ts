import { Injectable } from '@angular/core';
import { Instrument } from '../interfaces/instruments.interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private _carrito: Instrument[] = [];

  constructor() { }

  get carrito() {
    return this._carrito;
  }

  anadir(item: Instrument): boolean {
    
    if( this._carrito.some( x => x.id === item.id ) ){
      this.mas(item.id)
      return false
    }else{
      item.cantidad = 1;
      item.subtotal = item.precio * item.cantidad;
      this._carrito.push( item )
      return true
    }
  }

  quitar(id: number) {
    this._carrito.splice( this._carrito.findIndex( (c) => c.id === id) , 1 );
    // console.log(this._carrito)
  }

  mas(id: number) {
    this._carrito.map( x => {
      if(x.id === id && x.cantidad! < 5 ) {
        x.cantidad = x.cantidad! + 1;
        x.subtotal = x.cantidad * x.precio;
      }
    })
  }

  menos(id: number) {
    this._carrito.map( x => {
      if(x.id === id && x.cantidad! > 1) {
        x.cantidad = x.cantidad! - 1;
        x.subtotal = x.cantidad * x.precio;
      }
    })
  }
}
