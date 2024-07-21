export interface CountryData {
  __typename: string;
  name: string;
}

export interface CountryResponce {
  countries: CountryData[];
}
