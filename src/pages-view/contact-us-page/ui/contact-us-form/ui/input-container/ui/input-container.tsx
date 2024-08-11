import { FC } from "react";

import { InputContainerProps } from "../model";
import styles from "./styles.module.scss";

export const InputContainer: FC<InputContainerProps> = ({
  name,
  children,
  error,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.container__name}>{name}</p>
      {children}
      {error && <p className={styles.container__error}>{error}</p>}
    </div>
  );
};
