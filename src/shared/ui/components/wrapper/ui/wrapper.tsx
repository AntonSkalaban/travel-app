import { FC } from "react";

import { WrapperProps } from "../model";
import styles from "./styles.module.scss";

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
