import { z, ZodType } from "zod";

import { FormValues } from "./types";

export const formShema: ZodType<FormValues> = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  phone: z
    .string()
    .min(1, { message: "Phone number is required" })
    .length(11, { message: "Must be exactly 11 characters long" }),
});
