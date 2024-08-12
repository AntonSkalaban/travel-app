import { FC } from "react";
import Image from "next/image";

import { DecorImagesProps } from "../model";
import styles from "./styles.module.scss";

export const DecorImages: FC<DecorImagesProps> = ({ images }) => {
  return (
    <section className={styles.decor}>
      {images?.map((img) => (
        <Image
          className={styles.decor__image}
          key={img}
          src={img}
          alt="decor-image"
          width={100}
          height={100}
        />
      ))}
    </section>
  );
};
