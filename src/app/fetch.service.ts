import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }

  getInfo(selected, searchValue){
    let url = `https://swapi.co/api/${selected}/?search=${searchValue}`;
    return this.http.get(url)

  }
}
