import { Injectable } from '@angular/core';
import { SimpleCountry } from './get-models/get-countries.model';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  constructor() {}

  private service?: string;
  private country?: SimpleCountry;
  private _countries: SimpleCountry[] = [];

  public get countries(): SimpleCountry[] {
    return this._countries;
  }

  public set countries(value: SimpleCountry[]) {
    this._countries = value;
  }

  setService(service: string) {
    this.service = service;
  }

  setCountry(country: SimpleCountry) {
    this.country = country;
  }

  getService(): string | undefined {
    return this.service;
  }

  getCountry(): SimpleCountry | undefined {
    return this.country;
  }
}
