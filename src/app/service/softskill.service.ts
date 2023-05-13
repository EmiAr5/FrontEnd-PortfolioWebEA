import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Softskill } from '../model/softskill';

@Injectable({
  providedIn: 'root'
})
export class SoftskillService {

  URL = environment.URL + 'softskill/'
  constructor(private http: HttpClient) { }

  public list(): Observable<Softskill[]>{
    return this.http.get<Softskill[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Softskill>{
    return this.http.get<Softskill>(this.URL + `detalle/${id}`);
  }

  public save(softskill: Softskill): Observable<any> { 
    return this.http.post<any>(this.URL + 'new', softskill);
  }

  public update(id: number, softskill: Softskill): Observable<any>{
    return this.http.put<any>(this.URL + `modificar/${id}`, softskill);
  }

  public delete(id: number): Observable<any> { 
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}
