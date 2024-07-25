import { FC } from "react";

import { Filter } from "shared/ui/filter/ui";
import { ScrollButton } from "features/scroll-btn/ui";

import styles from "./styles.module.scss";

export const RoomsHeader: FC = () => {
  return (
    <section className={styles["rooms-header"]}>
      <Filter>
        <div className={styles["rooms-header__container"]}>
          <h2 className={styles["rooms-header__title"]}>Rooms and Suites</h2>
          <p className={styles["rooms-header__subtitle"]}>
            The elegant luxury bedrooms in this gallery showcase custom interior
            designs & decorating ideas. View pictures and find your perfect
            luxury bedroom design.
          </p>
          <ScrollButton />
        </div>
      </Filter>
    </section>
  );
};
