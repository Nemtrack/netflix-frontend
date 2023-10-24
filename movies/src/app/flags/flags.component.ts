import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { SimpleCountry } from '../shared/get-models/get-countries.model';
import { FiltersService } from '../shared/filters.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css'],
})
export class FlagsComponent implements OnInit {
  constructor(
    private http: DataStorageService,
    private filters: FiltersService
  ) {}

  ngOnInit(): void {
    this.http.getCountriesData().subscribe((data) => {
      this.countries = data.countries;
      console.log(this.countries);
    });
  }

  onCountryClicked(country: string): void {
    this.filters.setCountry(country);
  }

  countries: SimpleCountry[] = [];
}
