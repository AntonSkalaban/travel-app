import { FC } from "react";

import { HotelHeader } from "shared/ui/hotel-header/ui/hotel-header";

import styles from "./styles.module.scss";

export const Header: FC = () => {
  return (
    <HotelHeader>
      <h2 className={styles.header__title}>Cross-country tour</h2>
      <p className={styles.header__subtitle}>
        Every moment feels like the first time in paradise view
      </p>
      <button className={styles.header__btn}>Book now</button>
    </HotelHeader>
  );
};
