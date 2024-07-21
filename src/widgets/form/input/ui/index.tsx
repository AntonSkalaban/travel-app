import { forwardRef, InputHTMLAttributes } from "react";

import styles from "./styles.module.scss";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, FormInputProps>(
  ({ error, ...props }, ref) => {
    return (
      <div className={styles.container}>
        <input className={styles.input} ref={ref} {...props} />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  },
);
