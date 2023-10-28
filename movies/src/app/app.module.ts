import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { MoviesComponent } from './movies/movies.component';
import { FlagsComponent } from './flags/flags.component';
import { ErrorComponent } from './error/error.component';
import { FilterComponent } from './filter/filter.component';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    MoviesComponent,
    FlagsComponent,
    ErrorComponent,
    FilterComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
