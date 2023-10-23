import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { MoviesComponent } from './movies/movies.component';
import { ErrorComponent } from './error/error.component';
import { FlagsComponent } from './flags/flags.component';

const routes: Routes = [
  { path: '', component: WelcomeScreenComponent, pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent, pathMatch: 'full' },
  { path: 'flags', component: FlagsComponent, pathMatch: 'full'},
  { path: '**', component: ErrorComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
