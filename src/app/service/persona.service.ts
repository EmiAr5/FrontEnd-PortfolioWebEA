import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = environment.URL + 'persona/';

  constructor(private http: HttpClient) { }

  public list(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.URL + `detalle/${id}`);
  }

  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.URL + '/traer/perfil');
  }

  public save(persona: Persona): Observable<any> {
    return this.http.post<any>(this.URL + 'nueva', persona);
  }

  public update(id: number, persona: Persona): Observable<any> {
    return this.http.put<any>(this.URL + `modificar/${id}`, persona);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}
