import { FC } from "react";
import { useController } from "react-hook-form";

import { FormTextariaProps } from "../model";
import styles from "../../styles.module.scss";

export const FormTextaria: FC<FormTextariaProps> = ({
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
      <textarea
        className={`${styles.input} ${styles.textarea}`}
        {...field}
        {...props}
      />
      {error?.message && (
        <p className={styles.container__error}>{error.message}</p>
      )}
    </div>
  );
};
