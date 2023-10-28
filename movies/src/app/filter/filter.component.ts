import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../shared/filters.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  toggler = true;
  hamburgerToggle = false;
  isChecked = false;
  countries: { name: string; countryCode: string }[] = [];
  selectedCountry?: { name: string; countryCode: string };

  constructor(private filter: FiltersService) {}

  ngOnInit(): void {
    this.countries = this.filter.countries.map((country) => {
      return { name: country.name, countryCode: country.countryCode };
    });
    const country = this.filter.getCountry();
    if (country) {
      this.selectedCountry = {
        name: country.name,
        countryCode: country.countryCode,
      };
    }
  }

  onToggleCollapsed() {
    this.toggler = !this.toggler;
  }

  hamburgerToggler() {
    this.hamburgerToggle = !this.hamburgerToggle;
  }
}
