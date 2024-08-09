import { FC } from "react";

import styles from "./styles.module.scss";

export const RoomCardSkeleton: FC = () => {
  return <div className={styles.skeleton}></div>;
};
