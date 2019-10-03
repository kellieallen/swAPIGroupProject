import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable, of } from 'rxjs';

import { SWAPI } from './SWAPI'

@Injectable({
  providedIn: 'root' // gives us the option the have the service called anywhere
})

export class FetchserviceService {
  private url = `https://swapi.co/api/`

  constructor(private http: HttpClient) { }
  getSWapi(selected, searchTerm): Observable<SWAPI[]>{
    return this.http.get<SWAPI[]>(`${this.url}${selected}/?search=${searchTerm}`)
  }
}
  // we set the base of the URL
  // constructor = when we say http we mean http client (the angular menthod)
 // get Swapi is name of function, set up props for selected and search term,
 // : means telling the fuction what to expect to get back.. we are expecting an observable (window into feed of data)
//  SWAPI[] is empty data model,
// return results
