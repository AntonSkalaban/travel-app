import { ChangeEvent, FC } from "react";
import { useController } from "react-hook-form";

import { PhoneInputProps } from "../model";
import styles from "../../styles.module.scss";

export const PhoneInput: FC<PhoneInputProps> = ({ control, ...props }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: "phone",
    control,
  });

  const removeChars = (e: ChangeEvent<HTMLInputElement>) => {
    field.onChange(e.target.value.replace(/[^0-9]/g, ""));
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        {...field}
        {...props}
        type="tel"
        maxLength={11}
        placeholder="Phone (80XXYYYYYYY)"
        onChange={removeChars}
      />

      {error?.message && <p className={styles.error}>{error.message}</p>}
    </div>
  );
};
