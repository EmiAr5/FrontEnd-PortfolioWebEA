import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = environment.URL + 'educacion/';
  constructor(private http: HttpClient) { }

  public list(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.URL + `detalle/${id}`);
  }

  public save(educacion: Educacion): Observable<any> { 
    return this.http.post<any>(this.URL + 'nueva', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.http.put<any>(this.URL + `modificar/${id}`, educacion);
  }

  public delete(id: number): Observable<any> { 
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}
