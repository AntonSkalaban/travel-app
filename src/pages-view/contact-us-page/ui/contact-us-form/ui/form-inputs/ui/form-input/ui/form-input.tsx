import { FC } from "react";
import { useController } from "react-hook-form";

import { FormInputProps } from "../model";
import styles from "../../styles.module.scss";

export const FormInput: FC<FormInputProps> = ({
  title,
  name,
  control,
  ...props
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div className={styles.container}>
      <p className={styles.container__name}>{title}</p>
      <input className={styles.input} {...field} {...props} />
      {error?.message && (
        <p className={styles.container__error}>{error.message}</p>
      )}
    </div>
  );
};
