import { InputHTMLAttributes } from "react";
import { Control } from "react-hook-form";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  control: Control<{ [key: string]: string }>;
  name: string;
}
