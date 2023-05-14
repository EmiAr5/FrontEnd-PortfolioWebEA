import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hardskill } from '../model/hardskill';

@Injectable({
  providedIn: 'root'
})
export class HardskillService {

  URL = environment.URL + 'hardskill/'
  constructor(private http: HttpClient) { }

  public list(): Observable<Hardskill[]> {
    return this.http.get<Hardskill[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Hardskill> {
    return this.http.get<Hardskill>(this.URL + `detalle/${id}`);
  }

  public save(hardskill: Hardskill): Observable<any> {
    return this.http.post<any>(this.URL + 'nueva', hardskill);
  }

  public update(id: number, hardskill: Hardskill): Observable<any> {
    return this.http.put<any>(this.URL + `modificar/${id}`, hardskill);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}
