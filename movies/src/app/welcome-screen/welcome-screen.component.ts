import { Component } from '@angular/core';
import { MovieService } from './move-services.model';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css'],
})
export class WelcomeScreenComponent {
  services: MovieService[] = [
    new MovieService('netflix', './assets/netflix.jpg'),
    new MovieService('hulu', './assets/hulu.jpg'),
    new MovieService('prime', './assets/amazon.jpg'),
    new MovieService('hbo', './assets/hbo.jpg'),
  ];
}
