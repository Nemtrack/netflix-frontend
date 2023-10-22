import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../shared/filters.service';
import { ServicesService } from '../shared/services.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  constructor(
    private filters: FiltersService,
    private servicesServ: ServicesService
  ) {}

  service?: string;

  ngOnInit(): void {
    this.service = this.servicesServ.getService();
  }

  items = [1, 2, 3, 4, 5, 6];
}
