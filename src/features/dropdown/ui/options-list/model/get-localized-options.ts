import { Locale } from "shared/lib/i18n";

import { MultiLanguageOption } from "./types";

export const getLocalizedOptions = (
  data: MultiLanguageOption[],
  localeActive: Locale,
) => {
  return data?.map((el) => ({
    name: el.name[localeActive],
    value: el.value,
  }));
};
