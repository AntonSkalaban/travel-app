import { FC } from "react";

import { Wrapper } from "shared/ui";

import { HotelHeaderProps } from "../model";
import styles from "./styles.module.scss";

export const HotelHeader: FC<HotelHeaderProps> = ({ children }) => {
  return (
    <section className={styles["header"]}>
      <Wrapper>
        <div className={styles["header__container"]}>
          <p className={styles["header__logo"]}>Paradise View</p>
          {children}
        </div>
      </Wrapper>
    </section>
  );
};
