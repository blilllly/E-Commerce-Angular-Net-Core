import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Preguntas, Respuestas } from '../interfaces/instruments.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QaService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private _snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  snackError() {
    this._snackBar.open( 'Error: El id ya existe', undefined, { duration: 2500 } )
  }

  snackSuccess() {
    this._snackBar.open( 'La pregunta se añadió correctamente', undefined, { duration: 2500 } )
  }

  getPreguntas(): Observable<Preguntas[]> {
    return this.http.get<Preguntas[]>( `${this.baseUrl}/Preguntas` )
  }
  
  postPregunta( pregunta: Preguntas ): Observable<Preguntas> {
    return this.http.post<Preguntas>( `${this.baseUrl}/Preguntas/`, pregunta )
  }

  putPregunta( pregunta: Preguntas ): Observable<Preguntas> {
    return this.http.put<Preguntas>( `${this.baseUrl}/Preguntas/${pregunta.id}`, pregunta )
  }

  getRespuestas(): Observable<Respuestas[]>{
    return this.http.get<Respuestas[]>( `${this.baseUrl}/Respuesta` )
  }

}
