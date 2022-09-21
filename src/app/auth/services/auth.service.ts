import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Auth, UsuarioNuevo, Login } from '../interfaces/auth.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth() {
    return {...this._auth};
  }

  constructor(
    private http: HttpClient
  ) { }

  registro( user: UsuarioNuevo ): Observable<Auth> {
    return this.http.post<Auth>(`${this.baseUrl}/Auth/register`, user)
      .pipe(
        tap( auth => this._auth = auth ),
        tap( auth => localStorage.setItem('token', auth.token)),
        tap( auth => localStorage.setItem('nombre', auth.nombre)),
        tap( auth => localStorage.setItem('role', auth.role))
      )
  }

  login( user: Login ): Observable<Auth> {
    return this.http.post<Auth>(`${this.baseUrl}/Auth/login`, user)
      .pipe(
        tap( auth => this._auth = auth),
        tap( auth => localStorage.setItem('token', auth.token)),
        tap( auth => localStorage.setItem('nombre', auth.nombre)),
        tap( auth => localStorage.setItem('role', auth.role))
      )
  }

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('nombre')
    localStorage.removeItem('role')
  }
}
