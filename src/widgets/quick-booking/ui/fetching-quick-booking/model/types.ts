export interface CountryData {
  ru: string;
  en: string;
  __typename: string;
}

export interface CountryResponce {
  countries: CountryData[];
}
