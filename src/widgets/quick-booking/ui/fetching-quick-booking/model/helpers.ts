import { Locale } from "shared/lib/i18n";

import { CountryData } from "./types";

export const getLocationOptions = (
  data: CountryData[],
  localeActive: Locale,
) => {
  return data?.map((el) => ({
    name: el[localeActive],
    value: el.en,
  }));
};
