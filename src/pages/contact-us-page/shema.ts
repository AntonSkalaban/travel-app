import { z, ZodType } from "zod";

import { FormValues } from "./types";

export const formShema: ZodType<FormValues> = z.object({
  fullName: z.string().min(1, { message: "Full Name is required" }),
  email: z.string().min(1, { message: "Email is required" }),
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
