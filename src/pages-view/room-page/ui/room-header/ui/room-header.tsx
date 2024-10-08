import { FC } from "react";

import { Filter } from "shared/ui";

import styles from "./styles.module.scss";

export const RoomHeader: FC = () => {
  return (
    <section className={styles.header}>
      <Filter />
      <div className={styles.header__container}>
        <h2 className={styles.header__title}>Rooms and Suites</h2>
      </div>
    </section>
  );
};
