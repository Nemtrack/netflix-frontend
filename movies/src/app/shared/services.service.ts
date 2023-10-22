import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private service?: string;

  constructor() {}

  setService(service: string) {
    this.service = service;
  }

  getService(): string | undefined {
    return this.service;
  }
}
