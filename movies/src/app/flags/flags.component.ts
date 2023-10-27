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
  constructor(
    private http: DataStorageService,
    private filters: FiltersService
  ) {}

  ngOnInit(): void {
    this.service = this.filters.getService();
    this.isLoadingSubscription = this.http.loadingEmitter.subscribe((receivedLoading) => {
      this.isLoading = receivedLoading;
    });
    this.getSubscription = this.http.getCountriesData().subscribe((data) => {
      this.isLoading = false;
      this.countries = data.countries.filter((country) => {
        return country.services.includes(this.service as string);
      });
      console.log(this.countries);
    });
  }

  private isLoadingSubscription: Subscription = new Subscription();
  private getSubscription: Subscription = new Subscription();
  isLoading = false;

  onCountryClicked(country: string): void {
    this.filters.setCountry(country);
  }

  service?: string;
  countries: SimpleCountry[] = [];
  ngOnDestroy(): void {
    this.isLoadingSubscription.unsubscribe();
    this.getSubscription.unsubscribe();
  }
}
