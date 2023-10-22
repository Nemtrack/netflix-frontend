import { Component } from '@angular/core';
import { MovieService } from './move-services.model';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css'],
})
export class WelcomeScreenComponent {
  services: MovieService[] = [
    new MovieService('Netflix', './assets/netflix.jpg'),
    new MovieService('Hulu', './assets/hulu.jpg'),
    new MovieService('Amazon Prime', './assets/amazon.jpg'),
    new MovieService('HBO', './assets/hbo.jpg'),
  ];
}
