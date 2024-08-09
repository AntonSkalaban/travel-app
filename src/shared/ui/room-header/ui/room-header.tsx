import { FC, ReactNode } from "react";

import { Filter } from "shared/ui/filter/ui";

import styles from "./styles.module.scss";

export interface RoomHeaderProps {
  children: ReactNode;
}

export const RoomHeader: FC<RoomHeaderProps> = ({ children }) => {
  return (
    <section className={styles.header}>
      <Filter />
      <div className={styles.header__container}>{children}</div>
    </section>
  );
};
