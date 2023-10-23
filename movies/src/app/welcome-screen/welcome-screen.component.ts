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
    new MovieService('netflix', './assets/netflix.jpg'),
    new MovieService('hulu', './assets/hulu.jpg'),
    new MovieService('prime', './assets/amazon.jpg'),
    new MovieService('hbo', './assets/hbo.jpg'),
  ];

  onSetService(service: string) {
    this.servicesServ.setService(service);
  }

  hoveredItem?: MovieService | null;

  setHoveredItem(item: MovieService | null) {
    this.hoveredItem = item;
  }

  setTitleColorBasedOnServiceColor() {
    const title = document.querySelector('.title') as HTMLElement;

    switch (this.hoveredItem?.title) {
      case 'netflix':
        title.style.color = '#dc0913';
        break;
      case 'hulu':
        title.style.color = '#1edf7f';
        break;
      case 'prime':
        title.style.color = '#1a92f5';
        break;
      case 'hbo':
        title.style.color = 'white';
        break;
      default:
        title.style.color = 'yellow';
    }
  }
}
