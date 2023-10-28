import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { SimpleCountry } from '../shared/get-models/get-countries.model';
import { FiltersService } from '../shared/filters.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css'],
})
export class FlagsComponent implements OnInit, OnDestroy {
  private isLoadingSubscription = new Subscription();
  private getSubscription = new Subscription();
  isLoading = false;
  service?: string;
  countries: SimpleCountry[] = [];

  constructor(
    private http: DataStorageService,
    private filters: FiltersService
  ) {}

  ngOnInit(): void {
    this.service = this.filters.getService();
    this.isLoadingSubscription = this.http.loadingEmitter.subscribe(
      (receivedLoading) => {
        this.isLoading = receivedLoading;
      }
    );
    this.getSubscription = this.http.getCountriesData().subscribe((data) => {
      this.countries = data.countries.filter((country) => {
        return country.services.includes(this.service as string);
      });
      this.filters.countries = this.countries;
      console.log(this.countries);
    });
  }

  onCountryClicked(country: SimpleCountry): void {
    this.filters.setCountry(country);
  }

  ngOnDestroy(): void {
    this.isLoadingSubscription.unsubscribe();
    this.getSubscription.unsubscribe();
  }
}
