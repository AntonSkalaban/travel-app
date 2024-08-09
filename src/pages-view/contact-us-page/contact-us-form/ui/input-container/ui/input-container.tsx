import { FC } from "react";

import { InputContainerProps } from "../model/types";
import styles from "./styles.module.scss";

const InputContainer: FC<InputContainerProps> = ({ name, children, error }) => {
  return (
    <div className={styles.container}>
      <p className={styles.container__name}>{name}</p>
      {children}
      {error && <p className={styles.container__error}>{error}</p>}
    </div>
  );
};

export default InputContainer;
