import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {
  ApiResponse,
  SimplifiedApiResponse,
  SimpleCountry,
} from './get-models/get-countries.model';
import { Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient) {}

  countriesOptions = {
    method: 'GET',
    url: `${environment.streamingAvailabilityBaseUrl}/countries`,
    headers: {
      'X-RapidAPI-Key': environment.XRapidAPIKeyHeaderValue,
      'X-RapidAPI-Host': environment.XRapidAPIHostHeaderValue,
    },
  };

  loadingEmitter = new Subject<boolean>();

  getCountriesData(): Observable<SimplifiedApiResponse> {
    this.loadingEmitter.next(true);
    return this.http
      .request<ApiResponse>(
        this.countriesOptions.method,
        this.countriesOptions.url,
        { headers: this.countriesOptions.headers }
      )
      .pipe(
        map((response) => {
          const countries: SimpleCountry[] = [];
          for (const countryCode in response.result) {
            const countryData = response.result[countryCode];
            const services: string[] = [];
            for (const service in countryData.services) {
              const serviceData = countryData.services[service];
              services.push(serviceData.id);
            }
            const country: SimpleCountry = {
              countryCode: countryData.countryCode.toUpperCase(),
              name: countryData.name,
              services: services,
            };
            countries.push(country);
          }
          this.loadingEmitter.next(false);
          return { countries };
        })
      );
  }
}
