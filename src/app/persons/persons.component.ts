import { Component, OnInit } from '@angular/core';
import { Person } from "../person";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  person: Person = {
    id: 1,
    name: 'Luke',
    height: 172,
    mass: 77,
    hairColor: 'blond',
    skinColor: 'fair',
    eyeColor: 'blue',
    birthYear: '19BBY',
    gender: 'male',
    url: 'https://swapi.co/api/people/1/',
  };

  constructor() { }

  ngOnInit() {
  }

}
