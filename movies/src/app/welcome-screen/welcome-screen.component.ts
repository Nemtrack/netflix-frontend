import { Component, OnInit } from '@angular/core';
import { MovieService } from './move-services.model';
import { ServicesService } from '../shared/services.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css'],
})
export class WelcomeScreenComponent implements OnInit {
  constructor(private servicesServ: ServicesService) {}

  ngOnInit(): void {
    this.hoveredItem = null;
  }

  services: MovieService[] = [
    new MovieService('netflix', './assets/netflix.jpg', 'red'),
    new MovieService('hulu', './assets/hulu.jpg', 'green'),
    new MovieService('prime', './assets/amazon.jpg', 'blue'),
    new MovieService('hbo', './assets/hbo.jpg', 'white'),
  ];

  onSetService(service: string) {
    this.servicesServ.setService(service);
  }

  hoveredItem?: MovieService | null;

  setHoveredItem(item: MovieService | null) {
    this.hoveredItem = item;
    console.log(this.hoveredItem);
  }

  changeColorByHover(): string {
    switch (this.hoveredItem?.color) {
      case 'red':
        return 'red';
      case 'green':
        return 'green';
      case 'blue':
        return 'blue';
      case 'white':
        return 'white';
      default:
        return 'yellow';
    }
  }
}
