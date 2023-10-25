import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../shared/filters.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor(private filter: FiltersService) {}
  ngOnInit(): void {
    console.log(
      'Country: ',
      this.filter.getCountry(),
      'Service: ',
      this.filter.getService()
    );
  }

  toggler = false;

  onToggleCollapsed() {
    this.toggler = !this.toggler;
  }
}
