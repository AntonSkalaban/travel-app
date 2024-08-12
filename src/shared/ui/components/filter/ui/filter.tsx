import { FC } from "react";

import { FilterProps } from "../model";
import styles from "./styles.module.scss";

export const Filter: FC<FilterProps> = ({ children }) => {
  return <div className={styles.filter}>{children}</div>;
};
