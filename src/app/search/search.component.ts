import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // private searchTerms = new Subject<string>();

  // search(term: string): void {
  //   this.searchTerms.next(term);
  // }

  constructor() { }

  ngOnInit() {
  }

}
