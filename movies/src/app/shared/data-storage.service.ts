import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {
  Country,
  Result,
  Service,
  SimplifiedApiResponse,
} from './get-models/get-countries.model';
import { Observable, map } from 'rxjs';

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

  getCountriesData(): Observable<SimplifiedApiResponse> {
    return this.http
      .request<{ result: { [key: string]: any } }>(
        this.countriesOptions.method,
        this.countriesOptions.url,
        { headers: this.countriesOptions.headers }
      )
      .pipe(
        map((response) => {
          const countries: Country[] = [];
          for (const countryCode in response.result) {
            const countryData = response.result[countryCode];
            const services: Service[] = [];
            for (const serviceId in countryData.services) {
              const serviceData = countryData.services[serviceId];
              const service: Service = {
                id: serviceData.id,
                name: serviceData.name,
                homePage: serviceData.homePage,
                themeColorCode: serviceData.themeColorCode,
              };
              services.push(service);
            }
            const country: Country = {
              countryCode: countryData.countryCode,
              name: countryData.name,
              services: services,
            };
            countries.push(country);
          }
          return { countries };
        })
      );
  }
}
