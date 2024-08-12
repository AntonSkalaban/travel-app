import { z, ZodType } from "zod";

import { FormValues } from "./types";

const fullNameRegExp = /^[a-zA-Z\s]+$/;
const emailRegExp =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|ru|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;

export const formShema: ZodType<FormValues> = z.object({
  fullName: z
    .string()
    .min(1, { message: "Full Name is required" })
    .regex(fullNameRegExp, "Full name must only contain letters and spaces"),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .regex(emailRegExp, "Is not in correct format"),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(300, { message: "Max length 300" }),
});

export const defaultValues = {
  fullName: "",
  email: "",
  message: "",
};
