import { Component, OnInit } from '@angular/core';
import { Starship } from '../starship';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  startship: Starship = {
    id: 9,
    name: 'Death Star',
    model: 'DS-1 Orbital Battle Station',
    manufacturer: 'Imperial Department of Military Research, Sienar Fleet Systems',
    cost: 1000000000000,
    length: 120000,
    crew: 342953,
    passengers: 843342,
    hyperdriveRating: 4.0,
    url: 'https://swapi.co/api/starships/9/'
  };

  constructor() { }

  ngOnInit() {
  }

}
