import { FC } from "react";

import Arrow from "./images/Arrow.svg";
import styles from "./styles.module.scss";

export const ScrollButton: FC = () => {
  return (
    <button className={styles.btn}>
      <Arrow />
    </button>
  );
};
