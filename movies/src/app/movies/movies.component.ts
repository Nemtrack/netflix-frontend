import { Component } from '@angular/core';
import { FiltersService } from './filters.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {

  constructor(private filters: FiltersService) { }

  items = [1, 2, 3, 4, 5, 6];
}
