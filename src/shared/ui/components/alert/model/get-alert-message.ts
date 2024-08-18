import { Locale } from "shared/lib/i18n";

import { EmailErrorMessage, EmailSuccessMessage } from "./contants";
import { AlertType } from "./types";

export const getAlertMessage = (alertType: AlertType, localeActive: Locale) => {
  if (alertType === "error") return EmailErrorMessage[localeActive];
  return EmailSuccessMessage[localeActive];
};
