import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  
  constructor() {}

  private service?: string;
  private country?: string;

  setService(service: string) {
    this.service = service;
  }

  setCountry(country: string) {
    this.country = country;
  }

  getService(): string | undefined {
    return this.service;
  }

  getCountry(): string | undefined {
    return this.country;
  }
}
