import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

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

  getCountriesData() {
    return this.http.request(
      this.countriesOptions.method,
      this.countriesOptions.url,
      { headers: this.countriesOptions.headers }
    );
  }
}
