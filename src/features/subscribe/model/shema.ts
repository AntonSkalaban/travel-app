import { z, ZodType } from "zod";

import { FormValues } from "./types";

export const formShema: ZodType<FormValues> = z.object({
  email: z.string().min(1, { message: "Email is required" }).email(),
});
