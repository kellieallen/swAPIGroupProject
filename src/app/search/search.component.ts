import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular.common/http';

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



  searches: Search[] = [
    {value: 'people-0', viewValue: 'People'},
    {value: 'ships-1', viewValue: 'Ships'},
    {value: 'films-2', viewValue: 'Films'}
  ];
}
