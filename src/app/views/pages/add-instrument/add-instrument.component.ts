import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InstrumentService } from '../../services/instrument.service';
import { Instrument } from '../../interfaces/instruments.interface';

@Component({
  selector: 'app-add-instrument',
  templateUrl: './add-instrument.component.html',
  styleUrls: ['./add-instrument.component.css']
})
export class AddInstrumentComponent implements OnInit {

  ruta: string ='';

  constructor(private insService: InstrumentService) { }

  ngOnInit(): void {
  }

  instrument = new FormGroup({
    id: new FormControl(0, Validators.required),
    tipo: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    marca: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    rutaImg: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required)
  })

  anadirInstrument (){
    this.instrument.value.precio = this.instrument.value.precio! + 0.99;
    this.instrument.value.rutaImg = this.ruta;
    this.insService.addInstrument(this.instrument.value as Instrument)
    // console.log(this.instrument.value as Instrument)
  }

  rutaTemp(event: any) {
    this.ruta = URL.createObjectURL(event.target.files[0]);
    // document.getElementById("img1")!.setAttribute('src',this.ruta)
  }
}
