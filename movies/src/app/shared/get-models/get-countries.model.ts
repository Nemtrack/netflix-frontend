export interface SimplifiedApiResponse {
  countries: {
    countryCode: string;
    name: string;
    services: Service[];
  }[];
}

export interface Service {
  id: string;
  name: string;
  homePage: string;
  themeColorCode: string;
}

export interface Country {
  countryCode: string;
  name: string;
  services: Service[];
}

export interface Root {
  type: string
  additionalProperties: boolean
  properties: Properties
}

export interface Properties {
  result: Result
}

export interface Result {
  description: string
  type: string
  additionalProperties: AdditionalProperties
}

export interface AdditionalProperties {
  type: string
  description: string
  required: string[]
  additionalProperties: boolean
  properties: Properties2
}

export interface Properties2 {
  countryCode: CountryCode
  name: Name
  services: Services
}

export interface CountryCode {
  type: string
  description: string
}

export interface Name {
  type: string
  description: string
}

export interface Services {
  type: string
  description: string
  additionalProperties: AdditionalProperties2
}

export interface AdditionalProperties2 {
  type: string
  "x-additionalPropertiesName": string
  description: string
  required: string[]
  additionalProperties: boolean
  properties: Properties3
}

export interface Properties3 {
  id: Id
  name: Name2
  homePage: HomePage
  themeColorCode: ThemeColorCode
  images: Images
  supportedStreamingTypes: SupportedStreamingTypes
  addons: Addons
}

export interface Id {
  type: string
  description: string
}

export interface Name2 {
  type: string
  description: string
}

export interface HomePage {
  type: string
  description: string
}

export interface ThemeColorCode {
  type: string
  description: string
}

export interface Images {
  type: string
  description: string
  required: string[]
  additionalProperties: boolean
  properties: Properties4
}

export interface Properties4 {
  lightThemeImage: LightThemeImage
  darkThemeImage: DarkThemeImage
  whiteImage: WhiteImage
}

export interface LightThemeImage {
  type: string
  description: string
}

export interface DarkThemeImage {
  type: string
  description: string
}

export interface WhiteImage {
  type: string
  description: string
}

export interface SupportedStreamingTypes {
  type: string
  description: string
  required: string[]
  additionalProperties: boolean
  properties: Properties5
}

export interface Properties5 {
  addon: Addon
  buy: Buy
  rent: Rent
  free: Free
  subscription: Subscription
}

export interface Addon {
  type: string
  description: string
}

export interface Buy {
  type: string
  description: string
}

export interface Rent {
  type: string
  description: string
}

export interface Free {
  type: string
  description: string
}

export interface Subscription {
  type: string
  description: string
}

export interface Addons {
  type: string
  description: string
  additionalProperties: AdditionalProperties3
}

export interface AdditionalProperties3 {
  type: string
  "x-additionalPropertiesName": string
  description: string
  required: string[]
  additionalProperties: boolean
  properties: Properties6
}

export interface Properties6 {
  id: Id2
  displayName: DisplayName
  homePage: HomePage2
  themeColorCode: ThemeColorCode2
  image: Image
}

export interface Id2 {
  description: string
}

export interface DisplayName {
  description: string
}

export interface HomePage2 {
  description: string
}

export interface ThemeColorCode2 {
  description: string
}

export interface Image {
  description: string
}
