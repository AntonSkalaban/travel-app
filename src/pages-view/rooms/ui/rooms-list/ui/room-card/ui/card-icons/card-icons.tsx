import { FC } from "react";

import Shower from "./images/shower.svg";
import TV from "./images/tv.svg";
import WiFi from "./images/wifi.svg";
import styles from "./styles.module.scss";

export const CardIcons: FC = () => {
  return (
    <div className={styles.container}>
      <TV />
      <Shower />
      <WiFi />
    </div>
  );
};
