import { FC } from "react";

import { RoomHeader } from "shared/ui/room-header/ui";
import { ScrollButton } from "features/scroll-btn/ui";

import styles from "./styles.module.scss";

export const RoomsHeader: FC = () => {
  return (
    <RoomHeader>
      <h2 className={styles.header__title}>Rooms and Suites</h2>
      <p className={styles.header__subtitle}>
        The elegant luxury bedrooms in this gallery showcase custom interior
        designs & decorating ideas. View pictures and find your perfect luxury
        bedroom design.
      </p>
      <ScrollButton targetId="#rooms-list" />
    </RoomHeader>
  );
};
