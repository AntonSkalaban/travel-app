import { FC } from "react";

import { FaciliteCardProps } from "../model";
import styles from "./styles.module.scss";

const FaciliteCard: FC<FaciliteCardProps> = ({ title, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__svg}>{image}</div>
      <p className={styles.card__title}>{title}</p>
    </div>
  );
};

export default FaciliteCard;
