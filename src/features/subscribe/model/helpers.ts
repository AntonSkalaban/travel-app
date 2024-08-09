import { Locale } from "shared/lib/i18n";

import { EmailErrorMessage, EmailSuccessMessage } from "./constants";

export const getAlertType = (isFetching: boolean, isError: boolean) => {
  if (isError && !isFetching) return "error";
  return "success";
};

export const getAlertMessage = (
  alertType: "success" | "error",
  localeActive: Locale,
) => {
  if (alertType === "error") return EmailErrorMessage[localeActive];
  return EmailSuccessMessage[localeActive];
};
