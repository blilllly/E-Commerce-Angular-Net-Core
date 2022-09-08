import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MaterialModule } from '../material/material.module';
import { GuitarrasComponent } from './pages/instruments/guitarras/guitarras.component';
import { InstrumentCardComponent } from './components/instrument-card/instrument-card.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { AmplisComponent } from './pages/instruments/amplis/amplis.component';
import { AddInstrumentComponent } from './pages/add-instrument/add-instrument.component';
import { ImgPipe } from './components/pipes/img.pipe';
import { BajosComponent } from './pages/instruments/bajos/bajos.component';
import { MicrosComponent } from './pages/instruments/micros/micros.component';
import { PreguntasComponent } from './pages/preguntas/preguntas.component';
import { PreguntaInputComponent } from './components/pregunta-input/pregunta-input.component';
import { RespuestaInputComponent } from './components/respuesta-input/respuesta-input.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent,
    GuitarrasComponent,
    InstrumentCardComponent,
    CarritoComponent,
    AmplisComponent,
    AddInstrumentComponent,
    ImgPipe,
    BajosComponent,
    MicrosComponent,
    PreguntasComponent,
    PreguntaInputComponent,
    RespuestaInputComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class ViewsModule { }
