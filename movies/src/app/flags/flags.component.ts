import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.css'],
})
export class FlagsComponent implements OnInit {
  constructor(private http: DataStorageService) {}

  ngOnInit(): void {
    this.http.getCountriesData().subscribe((data: any) => {
      console.log(data);
    });
  }

  countries = [];
}
