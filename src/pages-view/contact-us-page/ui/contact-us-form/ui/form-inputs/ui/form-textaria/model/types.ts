import { TextareaHTMLAttributes } from "react";
import { Control } from "react-hook-form";

export interface FormTextariaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string;
  control: Control<{ [key: string]: string }>;
  name: string;
}
