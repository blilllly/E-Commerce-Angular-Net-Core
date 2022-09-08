import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Instrument } from '../../interfaces/instruments.interface';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private carService: CarritoService) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['spr', 'tipo','nombre', 'marca', 'precio', 'cantidad', 'total'];
  dataSource = this.carService.carrito;

  @ViewChild(MatTable) table!: MatTable<Instrument>;

  getTotal() {
    return this.carService.carrito.map(c => c.subtotal!).reduce((acc, value)=> acc + value, 0)
  }

  quitarCarrito(id: number){
    this.carService.quitar(id);
    this.table.renderRows();
  }

  mas(id: number) {
    this.carService.mas(id)
    this.table.renderRows();
  }

  menos( id: number ) {
    this.carService.menos(id)
    this.table.renderRows();
  }

}
