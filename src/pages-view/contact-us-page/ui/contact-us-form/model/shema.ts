import { z, ZodType } from "zod";
import { Locale } from "shared/lib";
import { formErrors } from "shared/model";

import { FormValues } from "./types";

const fullNameRegExp = /^[a-zA-Z\s]+$/;
const emailRegExp =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|ru|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;

export const getFormShema = (locale: Locale): ZodType<FormValues> => {
  return z.object({
    fullName: z
      .string()
      .min(1, { message: formErrors.fullName.require[locale] })
      .regex(fullNameRegExp, formErrors.fullName.regex[locale]),
    email: z
      .string()
      .min(1, { message: formErrors.email.require[locale] })
      .regex(emailRegExp, { message: formErrors.email.invalid[locale] }),
    message: z
      .string()
      .min(1, { message: formErrors.message.require[locale] })
      .max(300, { message: formErrors.message.max[locale] }),
  });
};

export const defaultValues = {
  fullName: "",
  email: "",
  message: "",
};
