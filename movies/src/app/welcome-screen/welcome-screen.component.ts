import { Component, OnInit } from '@angular/core';
import { MovieService } from './move-services.model';
import { FiltersService } from '../shared/filters.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css'],
})
export class WelcomeScreenComponent implements OnInit {
  constructor(private filtersServ: FiltersService) {}

  ngOnInit(): void {
    this.hoveredItem = null;
  }

  services: MovieService[] = [
    new MovieService('netflix', './assets/netflix.jpg', '#dc0913'),
    new MovieService('hulu', './assets/hulu.jpg', '#1edf7f'),
    new MovieService('prime', './assets/amazon.jpg', '#1a92f5'),
    new MovieService('hbo', './assets/hbo.jpg', 'white'),
    new MovieService('disney', './assets/disney.jpg', 'rgb(30,51,116)'),
  ];

  onSetService(service: string) {
    this.filtersServ.setService(service);
  }

  hoveredItem?: MovieService | null;

  setHoveredItem(item: MovieService | null) {
    this.hoveredItem = item;
  }

  setTitleColorBasedOnServiceColor() {
    const title = document.querySelector('.title') as HTMLElement;
    this.hoveredItem
      ? (title.style.color = this.hoveredItem?.color)
      : (title.style.color = 'yellow');
  }
}
