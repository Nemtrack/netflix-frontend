import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../shared/filters.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  service?: string;
  items = [1, 2, 3, 4, 5, 6];
  constructor(private filters: FiltersService) {}

  ngOnInit(): void {
    this.service = this.filters.getService();
  }
}
