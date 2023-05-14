import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Idioma } from '../model/idioma';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  URL = environment.URL + 'idioma/';

  constructor(private http: HttpClient) { }

  public list(): Observable<Idioma[]> {
    return this.http.get<Idioma[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Idioma> {
    return this.http.get<Idioma>(this.URL + `detalle/${id}`);
  }

  public save(idioma: Idioma): Observable<any> {
    return this.http.post<any>(this.URL + 'nuevo', idioma);
  }

  public update(id: number, idioma: Idioma): Observable<any> {
    return this.http.put<any>(this.URL + `modificar/${id}`, idioma);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}
