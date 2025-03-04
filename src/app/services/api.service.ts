import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {apiKey} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    private apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/EUR`;

  constructor(private http: HttpClient) {}

    getExchanges(): Observable<any> {

    return this.http.get(this.apiUrl).pipe(
        catchError(error => {
          console.error('Error en la conexión con la API:', error);
          return throwError(() => new Error('No se pudo obtener los datos de la API'));
        })
    );
  }
}