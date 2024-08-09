export interface Tour {
  __typename: string;
  id: number;
  country: string;
  city: string;
  currency: string;
  flag: string;
}

export interface TourCountry extends Pick<Tour, "country"> {}

export interface TourCountryResponce {
  toursCountries: TourCountry[];
}

export interface TourResponce {
  tours: { __typename: string; tours: Tour[]; totalItems: number };
}
