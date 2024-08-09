"use client";
import { FC } from "react";

import Arrow from "./images/Arrow.svg";
import { scroll, ScrollButtonProps } from "../model";
import styles from "./styles.module.scss";

export const ScrollButton: FC<ScrollButtonProps> = ({ targetId }) => {
  const handleClick = () => {
    scroll(targetId);
  };
  return (
    <button className={styles.btn} onClick={handleClick}>
      <Arrow />
    </button>
  );
};
