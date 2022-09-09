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

  getPreguntaXId( id: string ): Observable<Preguntas> {
    return this.http.get<Preguntas>(`${this.baseUrl}/Preguntas/${id}`)
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
