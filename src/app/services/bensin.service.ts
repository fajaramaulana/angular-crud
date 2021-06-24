import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bensin } from '../models/bensin.model';

const baseUrl = 'http://localhost:8080/api'

@Injectable({
  providedIn: 'root'
})
export class BensinService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Bensin[]> {
    return this.http.get<Bensin[]>(baseUrl);
  }

  get(id: any): Observable<Bensin> {
    return this.http.get(`${baseUrl}/bbm/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/newbbm`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/bbm/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/bbm/${id}`);
  }

}
