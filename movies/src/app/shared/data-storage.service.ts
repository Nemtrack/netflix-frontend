import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {
  Service,
  SimpleCountry,
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
          const countries: SimpleCountry[] = [];
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
            const country: SimpleCountry = {
              countryCode: countryData.countryCode.toUpperCase(),
              name: countryData.name,
              services: services.map((service) => service.name),
            };
            countries.push(country);
          }
          return { countries };
        })
      );
  }
}
