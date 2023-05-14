import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = environment.URL + 'experiencia/';

  constructor(private http: HttpClient) { }

  public list(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Experiencia> {
    return this.http.get<Experiencia>(this.URL + `detalle/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any> {
    return this.http.post<any>(this.URL + 'nueva', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.http.put<any>(this.URL + `modificar/${id}`, experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }

}
