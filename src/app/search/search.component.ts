import { Component, OnInit } from '@angular/core';
import { FetchserviceService } from '../fetchservice.service';

export interface Food {
  value: string;
  viewValue: string;
}

// above is for the "x" button that will delete text typed. interfaces are suggestions about how we want data to be.

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  results;
  selectedVal;

  constructor(private Fetch: FetchserviceService) { } // each time class is created, the constructor says the fetch is needed

  searches = [
    {value: 'people', viewValue: 'People'},
    {value: 'starships', viewValue: 'Ships'},
    {value: 'films', viewValue: 'Films'}
  ];

  getSearch(selected, searchTerm): void{ // we are passing in selected (from dropdown menu and search term).  we don't really need void?
     console.log(selected, searchTerm);
    this.selectedVal = selected; // you have to step into Search Component to get the selected value from the dropdown menu
    this.Fetch.getSWapi(selected, searchTerm) // variable fetch refers to fetch serves.. creates new instance of fetchService..step into API.
      .subscribe(data => { // kind of like.then.. but subscribing gives steady flow of results, fat arrow function
        console.log(data);
        this.results = data; // with that data, call it results
      })
    }
}
