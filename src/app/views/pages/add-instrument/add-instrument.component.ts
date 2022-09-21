import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { InstrumentService } from '../../services/instrument.service';
import { Instrument } from '../../interfaces/instruments.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.component.html',
  styleUrls: ['./add-instrument.component.css']
})
export class AddInstrumentComponent implements OnInit {

  inst: Instrument = {
    marca: '',
    modelo: '',
    descripcion: '',
    precio: 0,
    tipoProductoId: 0,
    imagen: ''
  }

  constructor(
    private insService: InstrumentService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  instrument: FormGroup = this.fb.group({
    marca: [ '', [ Validators.required ] ],
    modelo: [ '', [ Validators.required ] ],
    descripcion: [ '', [ Validators.required ] ],
    precio: [ 0, [ Validators.required ] ],
    tipoProductoId: [ 0, [ Validators.required ] ],
    imagen: [ '', [ Validators.required ] ]
  })

  anadirInstrument (){
    this.instrument.value.precio = this.instrument.value.precio! + 0.99;
    this.inst = this.instrument.value;
    this.inst.tipoProductoId = Number(this.inst.tipoProductoId);
    console.log(this.inst)
    this.insService.postProductos(this.inst)
      .subscribe( resp => {
        if(resp.tipoProductoId==1)
        this.router.navigate(['/guitarras'])
        if(resp.tipoProductoId==2)
        this.router.navigate(['/amplis'])
        if(resp.tipoProductoId==3)
        this.router.navigate(['/bajos'])
        if(resp.tipoProductoId==4)
        this.router.navigate(['/micros'])
      })
    // this.insService.addInstrument(this.instrument.value as Instrument)
    // console.log(this.instrument.value as Instrument)
  }

  rutaTemp(event: any) {
    // this.ruta = URL.createObjectURL(event.target.files[0]);
    // document.getElementById("img1")!.setAttribute('src',this.ruta)
  }
}
