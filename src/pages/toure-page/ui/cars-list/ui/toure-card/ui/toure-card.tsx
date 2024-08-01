import { FC } from "react";
import Image from "next/image";

import { ToureCardProps } from "../model/types";
import styles from "./styles.module.scss";

export const ToureCard: FC<ToureCardProps> = ({
  country,
  city,
  currency,
  flag,
}) => {
  return (
    <article className={styles.card}>
      <h5 className={styles.card__currency}>Currency - {currency}</h5>
      <div className={styles["card__img-container"]}>
        <Image src={flag} alt="toure-image" width={180} height={102} />
      </div>

      <div className={styles.card__row}>
        <div className={styles.card__info}>
          <h4 className={styles.card__country}>{country}</h4>
          <p className={styles.card__city}>{city}</p>
        </div>
        <button className={styles.card__btn}>More</button>
      </div>
    </article>
  );
};
