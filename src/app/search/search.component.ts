import { Component, OnInit } from '@angular/core';
import { FetchserviceService } from '../fetchservice.service';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  results;
  selectedVal;
  constructor(private Fetch: FetchserviceService) { }

  searches = [
    {value: 'people', viewValue: 'People'},
    {value: 'starships', viewValue: 'Ships'},
    {value: 'films', viewValue: 'Films'}
  ];

  getSearch(selected, searchTerm): void{
    console.log(selected, searchTerm);
    this.selectedVal = selected;
    this.Fetch.getSWapi(selected, searchTerm)
      .subscribe(data => {
        console.log(data);
        this.results = data;
      })
    }
}
