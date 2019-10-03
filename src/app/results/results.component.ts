import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input()results; // angular will look for results, and they will be passed as proprties
  @Input()selected; // angular will look for selected, and they will be passed as proprties

  constructor() { }

  ngOnInit() {
    console.log(this.results)
  }
}
