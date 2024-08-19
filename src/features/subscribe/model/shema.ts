import { z, ZodType } from "zod";
import { Locale } from "shared/lib";
import { formErrors } from "shared/model";

import { FormValues } from "./types";

export function getFormShema(locale: Locale): ZodType<FormValues> {
  return z.object({
    email: z
      .string()
      .min(1, { message: formErrors.email.require[locale] })
      .email({ message: formErrors.email.invalid[locale] }),
  });
}
