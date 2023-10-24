import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  
  constructor() {}

  private service?: string;

  setService(service: string) {
    this.service = service;
  }

  getService(): string | undefined {
    return this.service;
  }
}
