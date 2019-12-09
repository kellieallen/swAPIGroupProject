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

export class SearchComponent { // class is like bluebprint for a house
  results; // just setting up a variable that we'll use later.. nothing there now but when getSearch runs it's filled with our results
  selectedVal; // same as above

  constructor(private Fetch: FetchserviceService) { } // down below, getSearch calls another service we set up, FetchserviceService, here we are just renaming it Fetch and this gives us access to getSWAPI method we set up in fetchservice.

  searches = [
    {value: 'people', viewValue: 'People'},
    {value: 'starships', viewValue: 'Ships'},
    {value: 'films', viewValue: 'Films'}
  ];

  getSearch(selected, searchTerm): void{ // we are passing in selected (from dropdown menu) and search term).  we don't really need void?
     console.log(selected, searchTerm);
    this.selectedVal = selected; // you have to step into Search Component to get the selected value from the dropdown menu
    this.Fetch.getSWapi(selected, searchTerm) // variable fetch refers to fetch serves.. creates new instance of fetchService..step into API.
      .subscribe(data => { // kind of like.then.. but subscribing gives steady flow of results, fat arrow function
        console.log(data);
        this.results = data; // with that data, call it results
      })
    }
}
