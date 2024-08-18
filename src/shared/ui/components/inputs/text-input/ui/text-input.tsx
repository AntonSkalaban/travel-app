import { FC } from "react";
import { useController } from "react-hook-form";

import { TextInputProps } from "../model";
import styles from "../../styles.module.scss";

export const TextInput: FC<TextInputProps> = ({ name, control, ...props }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div className={styles.container}>
      <input className={styles.input} {...field} {...props} />
      {error?.message && <p className={styles.error}>{error.message}</p>}
    </div>
  );
};
