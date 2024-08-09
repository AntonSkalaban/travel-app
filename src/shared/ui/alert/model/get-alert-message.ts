import { Locale } from "shared/lib/i18n";

import { EmailErrorMessage, EmailSuccessMessage } from "./contants";

export const getAlertMessage = (
  alertType: "success" | "error",
  localeActive: Locale,
) => {
  if (alertType === "error") return EmailErrorMessage[localeActive];
  return EmailSuccessMessage[localeActive];
};
