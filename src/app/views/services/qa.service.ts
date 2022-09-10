import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Preguntas, Respuestas } from '../interfaces/instruments.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QaService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getPreguntas(): Observable<Preguntas[]> {
    return this.http.get<Preguntas[]>( `${this.baseUrl}/Preguntas` )
  }

  getPreguntaXId( id: string ): Observable<Preguntas> {
    return this.http.get<Preguntas>(`${this.baseUrl}/Preguntas/${id}`)
  }
  
  postPregunta( pregunta: Preguntas ): Observable<Preguntas> {
    return this.http.post<Preguntas>( `${this.baseUrl}/Preguntas/`, pregunta )
  }

  putPregunta( pregunta: Preguntas ): Observable<Preguntas> {
    return this.http.put<Preguntas>( `${this.baseUrl}/Preguntas/${pregunta.id}`, pregunta )
  }

  deletePregunta( id: number ): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/Preguntas/${id}`)
  }

  getRespuestas(): Observable<Respuestas[]>{
    return this.http.get<Respuestas[]>( `${this.baseUrl}/Respuesta` )
  }

}
