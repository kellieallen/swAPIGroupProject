import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable, of } from 'rxjs';

import { SWAPI } from './SWAPI'

@Injectable({
  providedIn: 'root'
})
export class FetchserviceService {
  private url = `https://swapi.co/api/`

  constructor(private http: HttpClient) { }
  getSWapi(selected, searchTerm): Observable<SWAPI[]>{
    return this.http.get<SWAPI[]>(`${this.url}${selected}/?search=${searchTerm}`)
  }
}
