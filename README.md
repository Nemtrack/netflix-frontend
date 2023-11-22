# netflix-frontend

## Introduction
An Angular application which utilizes the Streaming Availability RapidAPI API to help users find movies and series available on different streaming platforms.

## Technologies Used
- Angular
- Streaming Availability RapidAPI
- flagcdn.com for flag images

## Pages

### 1. Home Page
- Dynamic Blurring: The page displays a list of the most famous streaming applications.
- Interaction: Users can click on a streaming service to enlarge it while blurring out the others.
- Color Change: The title of the screen switches to the color associated with the chosen streaming service.

### 2. Clickable Flags Page
- Routing: Clicking on a streaming service navigates the user to this page.
- Flags: Display flags of countries where the selected streaming service is available.
- Flag Images: Flags are sourced from flagcdn.com.

### 3. Movie/Series Sorting Page
- Routing: Clicking on a flag on the Streaming Service Details Page navigates the user to this page.
- Content Sorting: Users can sort and filter movies/series based on different criteria.
- Utilizes Streaming Availability RapidAPI to fetch data.

## Code Examples

### Component Initialization For Flag Sorting
```typescript
  ngOnInit(): void {
    this.service = this.filters.getService();
    this.isLoadingSubscription = this.http.loadingEmitter.subscribe(
      (receivedLoading: boolean) => {
        this.isLoading = receivedLoading;
      }
    );
    this.getSubscription = this.http
      .getCountriesData()
      .subscribe((data: { countries: any[] }) => {
        this.countries = data.countries.filter(
          (country: { services: string | string[] }) => {
            return country.services.includes(this.service as string);
          }
        );
        this.filters.countries = this.countries;
        console.log(this.countries);
      });
  }
