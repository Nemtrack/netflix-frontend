export interface SimplifiedApiResponse {
  countries: SimpleCountry[];
}

export interface SimpleCountry {
  countryCode: string;
  name: string;
  services: string[];
}

export interface Image {
  lightThemeImage: string;
  darkThemeImage: string;
  whiteImage: string;
}

export interface AddonDetails {
  id: string;
  displayName: string;
  homePage: string;
  themeColorCode: string;
  image: string;
}

export interface ServiceDetails {
  id: string;
  name: string;
  homePage: string;
  themeColorCode: string;
  images: Image;
  supportedStreamingTypes: {
    addon: boolean;
    buy: boolean;
    rent: boolean;
    free: boolean;
    subscription: boolean;
  };
  addons: {
    [addonId: string]: AddonDetails;
  };
}

export interface CountryDetails {
  countryCode: string;
  name: string;
  services: {
    [serviceName: string]: ServiceDetails;
  };
}

export interface ApiResponse {
  result: {
    [countryCode: string]: CountryDetails;
  };
}
