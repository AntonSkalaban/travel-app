import { Locale } from "shared/lib/i18n";

import { EmailErrorMessage, EmailSuccessMessage } from "./types";

export const getAlertType = (isFetching: boolean, isError: boolean) => {
  return !isFetching && !isError ? "success" : "error";
};

export const getAlertMessage = (
  alertType: "success" | "error",
  localeActive: Locale,
) => {
  if (alertType === "error") return EmailErrorMessage[localeActive];
  return EmailSuccessMessage[localeActive];
};
