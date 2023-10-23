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
    new MovieService('netflix', './assets/netflix.jpg', '#dc0913'),
    new MovieService('hulu', './assets/hulu.jpg', '#1edf7f'),
    new MovieService('prime', './assets/amazon.jpg', '#1a92f5'),
    new MovieService('hbo', './assets/hbo.jpg', 'white'),
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

    if (this.hoveredItem) {
      title.style.color = this.hoveredItem?.color;
    } else {
      title.style.color = 'yellow';
    }
  }
}
