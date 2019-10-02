import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  results: [];

  getInfo(): void {
    this.results = this.fetch.getInfo();
  }

  constructor(private fetch:FetchService) { }

  ngOnInit() {
  }

}
