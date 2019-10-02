import { Component, OnInit } from '@angular/core';
import { Film } from '../film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  film: Film = {
    id: 2,
    title: 'The Empire Strikes Back',
    episodeID: 5,
    director: 'Irvin Kershner',
    producer: 'Gary Kurtz, Rick McCallum',
    releaseDate: 19800517,
    url: 'https://swapi.co/api/films/2/'
  };

  constructor() { }

  ngOnInit() {
  }

}
