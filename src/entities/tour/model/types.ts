export interface Tour {
  __typename: string;
  id: number;
  country: string;
  city: string;
  currency: string;
  flag: string;
}

export interface TourResponce {
  tours: Tour[];
}
