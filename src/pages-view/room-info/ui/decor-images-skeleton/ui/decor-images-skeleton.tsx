import { FC } from "react";

import { createIndexedArray } from "shared/model";

import styles from "./styles.module.scss";

const DecorImagesSkeleton: FC = () => {
  return (
    <section className={styles["decor-skeleton"]}>
      {createIndexedArray(3).map((el) => (
        <div key={el} className={styles["image-skeleton"]} />
      ))}
    </section>
  );
};
export default DecorImagesSkeleton;
