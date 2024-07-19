import { CountryResponce } from "./types";

export const getLocationOptions = (data: CountryResponce) => {
  return data?.countries?.map((location) => ({
    name: location.name,
    value: location.name,
  }));
};
