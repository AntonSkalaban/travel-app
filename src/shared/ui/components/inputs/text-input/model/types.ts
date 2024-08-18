import { InputHTMLAttributes } from "react";
import { Control } from "react-hook-form";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<{ [key: string]: string }>;
  name: string;
}
