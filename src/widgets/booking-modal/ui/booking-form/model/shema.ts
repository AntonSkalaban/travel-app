import { z, ZodType } from "zod";
import { Locale } from "shared/lib";
import { formErrors } from "shared/model";

import { FormValues } from "./types";

export function getFormShema(locale: Locale): ZodType<FormValues> {
  return z.object({
    firstName: z
      .string()
      .min(1, { message: formErrors.firstName.require[locale] }),
    lastName: z
      .string()
      .min(1, { message: formErrors.lastName.require[locale] }),
    phone: z
      .string()
      .min(1, { message: formErrors.phone.require[locale] })
      .length(11, { message: formErrors.phone.length[locale] }),
  });
}

export const defaultValues = {
  firstName: "",
  lastName: "",
  phone: "",
};
