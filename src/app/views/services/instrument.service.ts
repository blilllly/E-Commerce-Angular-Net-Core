import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Instrument } from '../interfaces/instruments.interface';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  private _guitarArray: Instrument[] = [
    {
      id: 0,
      tipo: 'Guitarra',
      nombre: 'Les Paul Standar',
      marca: 'Gibson',
      descripcion:'Guitarra Gibson de gama alta, que comenzó a fabricarse en la década de 1950. Su principal característica que las diferencia de otras Gibson es que su forma es inconfundible, con su mástil corto, sus dos pastillas y sus cuatro botones.',
      rutaImg: '../../../../assets/images/instrumentos/guitarras/gibson-lp-s.png',
      precio: 2499.99
    },
    {
      id: 1,
      tipo: 'Guitarra',
      nombre: 'Stratocaster American Deluxe',
      marca: 'Fender',
      descripcion:'Mantiene su aspecto tradicional y sentir, y la vez que introduce mejoras que incluyen tres pastillas de bobina simple N3 silenciosas que todavía producen su brillo venerada y se encajan a presión, con diseño silencioso sin el molesto zumbido.',
      rutaImg: '../../../../assets/images/instrumentos/guitarras/fender-stratocaster-deluxe-usa.jpg',
      precio: 1249.99
    },
    {
      id: 2,
      tipo: 'Guitarra',
      nombre: 'SE Custom 24-08',
      marca: 'PRS',
      descripcion:'Cuerpo de caoba. Tapa de arce con una talla de violín poco profunda y chapa de arce rizado. Cuello de arce pegado. Diapasón de palisandro de 24 trastes con incrustaciones de pájaro de la vieja escuela.',
      rutaImg: '../../../../assets/images/instrumentos/guitarras/prs-se-custom-24-08.jpg',
      precio: 999.99
    },
    {
      id: 3,
      tipo: 'Guitarra',
      nombre: 'RGT1220PB Premium',
      marca: 'Ibanez',
      descripcion:"Cuenta con electrónica y hardware Prestige-esque pero a un precio más asequible. Con el famoso perfil de cuello delgado 'Wizard III', también viene equipado con un par de humbuckers DiMarzio de alto rendimiento y el legendario sistema de trémolo Edge.",
      rutaImg: '../../../../assets/images/instrumentos/guitarras/ibanez.jpg',
      precio: 1499.99
    },
    {
      id: 4,
      tipo: 'Guitarra',
      nombre: 'G5422T Electromatic',
      marca: 'Gretsch',
      descripcion:"Las guitarras Electromatic de cuerpo hueco G5422T son los instrumentos Gretsch perfectos, reales, puros y potentes. Son el siguiente paso de Gretsch: audaces, dinámicos y articulados, y diseñados con el sonido, el estilo y la capacidad de interpretación esenciales de Gretsch.",
      rutaImg: '../../../../assets/images/instrumentos/guitarras/G5422T.jpg',
      precio: 899.99
    },
    {
      id: 5,
      tipo: 'Guitarra',
      nombre: 'DRS1',
      marca: 'Martin',
      descripcion:"Creado siguiendo el estilo tradicional y legendario del tono Martin, este modelo electro-acústico de la DRS1 construido con tapa, fondo y laterales de sapelly no te dejará indiferente. Además, este modelo incluye piezas certificadas de madera sostenible.",
      rutaImg: '../../../../assets/images/instrumentos/guitarras/martin.jpg',
      precio: 949.99
    }
  ];
  private _ampliArray: Instrument[] = [];
  private _bajoArray: Instrument[] = [];
  private _microArray: Instrument[] = [];
  
  constructor(private _snackBar: MatSnackBar) { }

  get guitarras() {
    return this._guitarArray
  }

  get amplificadores() {
    return this._ampliArray
  }

  get bajos() {
    return this._bajoArray
  }

  get micros() {
    return this._microArray
  }

  addInstrument(ins: Instrument) {
    
    if( ins.tipo === 'guitarra' ) {
      if( this._guitarArray.some( x => x.id === ins.id ) ) {
        this.snackError()
      }
      else {
        this._guitarArray.push(ins)
        this.snackSuccess()
      }
    }

    if( ins.tipo === 'amplificador' ) {
      if( this._ampliArray.some( x => x.id === ins.id ) ) {
        this.snackError()
      }
      else {
        this._ampliArray.push(ins)
        this.snackSuccess()
      }
    }

    if( ins.tipo === 'bajo' ) {
      if( this._bajoArray.some( x => x.id === ins.id ) ) {
        this.snackError()
      }
      else {
        this._bajoArray.push(ins)
        this.snackSuccess()
      }
    }

    if( ins.tipo === 'microfono' ) {
      if( this._microArray.some( x => x.id === ins.id ) ) {
        this.snackError()
      }
      else {
        this._microArray.push(ins)
        this.snackSuccess()
      }
    }

  }

  snackError() {
    this._snackBar.open( 'Error: El instrumento ya existe', undefined, { duration: 2500 } )
  }

  snackSuccess() {
    this._snackBar.open( 'El instrumento se añadió correctamente', undefined, { duration: 2500 } )
  }
}
