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
    this.service = this.filters.getService();
    this.http.getCountriesData().subscribe((data) => {
      this.countries = data.countries.filter((country) => {
        return country.services.includes(this.service as string);
      });
      console.log(this.countries);
    });
  }

  onCountryClicked(country: string): void {
    this.filters.setCountry(country);
  }

  service?: string;
  countries: SimpleCountry[] = [];
}
