import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './views/pages/login/login.component';
import { WelcomeComponent } from './views/pages/welcome/welcome.component';
import { GuitarrasComponent } from './views/pages/instruments/guitarras/guitarras.component';
import { AddInstrumentComponent } from './views/pages/add-instrument/add-instrument.component';
import { BajosComponent } from './views/pages/instruments/bajos/bajos.component';
import { AmplisComponent } from './views/pages/instruments/amplis/amplis.component';
import { MicrosComponent } from './views/pages/instruments/micros/micros.component';
import { PreguntasComponent } from './views/pages/preguntas/preguntas.component';
import { PreguntaInputComponent } from './views/components/pregunta-input/pregunta-input.component';
import { RespuestaInputComponent } from './views/components/respuesta-input/respuesta-input.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'guitarras',
    component: GuitarrasComponent
  },
  {
    path: 'bajos',
    component: BajosComponent
  },
  {
    path: 'amplis',
    component: AmplisComponent
  },
  {
    path: 'micros',
    component: MicrosComponent
  },
  {
    path: 'add',
    component: AddInstrumentComponent
  },
  {
    path: 'preguntas',
    component: PreguntasComponent
  },
  {
    path: 'pregInput',
    component: PreguntaInputComponent
  },
  {
    path: 'respInput/:id',
    component: RespuestaInputComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
