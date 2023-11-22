# netflix-frontend

## Introduction
An Angular application which utilizes the Streaming Availability RapidAPI API to help users find movies and series available on different streaming platforms.

## Technologies Used
- Angular v16
- Streaming Availability RapidAPI API
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
```

### The Data Storage Service Itself
```typescript
export class DataStorageService {
  constructor(private http: HttpClient) {}

  countriesOptions = {
    method: 'GET',
    url: `${environment.streamingAvailabilityBaseUrl}/countries`,
    headers: {
      'X-RapidAPI-Key': environment.XRapidAPIKeyHeaderValue,
      'X-RapidAPI-Host': environment.XRapidAPIHostHeaderValue,
    },
  };

  private _loadingEmitter = new Subject<boolean>();

  public get loadingEmitter() {
    return this._loadingEmitter;
  }

  getCountriesData(): Observable<SimplifiedApiResponse> {
    this.loadingEmitter.next(true);
    return this.http
      .request<ApiResponse>(
        this.countriesOptions.method,
        this.countriesOptions.url,
        { headers: this.countriesOptions.headers }
      )
      .pipe(
        map((response) => {
          const countries: SimpleCountry[] = [];
          for (const countryCode in response.result) {
            const countryData = response.result[countryCode];
            const services: string[] = [];
            for (const service in countryData.services) {
              const serviceData = countryData.services[service];
              services.push(serviceData.id);
            }
            const country: SimpleCountry = {
              countryCode: countryData.countryCode.toUpperCase(),
              name: countryData.name,
              services: services,
            };
            countries.push(country);
          }
          this.loadingEmitter.next(false);
          return { countries };
        })
      );
  }
}
```

## Installation
Use
```bash
npm install
```
to install all necessary modules for running the application.

## Running The App
Use
```bash
npm start
```
to start the application.

## Default Host
Visit [localhost:4200](http://localhost:4200/) to access the server
