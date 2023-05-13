import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = environment.URL + 'proyecto/';

  constructor(private http: HttpClient) { }

  public list(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.http.get<Proyecto>(this.URL + `detalle/${id}`);
  }

  public save(proyecto: Proyecto): Observable<any> { 
    return this.http.post<any>(this.URL + 'new', proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any>{
    return this.http.put<any>(this.URL + `modificar/${id}`, proyecto);
  }

  public delete(id: number): Observable<any> { 
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}
