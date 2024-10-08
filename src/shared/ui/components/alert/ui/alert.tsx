import { FC, memo } from "react";
import { createPortal } from "react-dom";

import { AlertProps } from "../model";
import styles from "./styles.module.scss";

export const Alert: FC<AlertProps> = memo(({ message, type }) => {
  return createPortal(
    <div
      className={`${styles.alert} ${type === "success" ? styles.alert_success : styles.alert_error}`}
    >
      <p className="text-big">{message}</p>
    </div>,
    document.body,
  );
});
