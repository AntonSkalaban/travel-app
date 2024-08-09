import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { RoomCardProps } from "../model/types";
import styles from "./styles.module.scss";

const RoomCard: FC<RoomCardProps> = ({ title, image, count }) => {
  const t = useTranslations("home.rooms");

  return (
    <article className={styles.card}>
      <div className={styles["card__img-container"]}>
        <Image src={image} alt="room-image" />
        <button className={styles.card__btn}>
          {count} {t("btn")}
        </button>
      </div>
      <p className={styles.card__text}>{title}</p>
    </article>
  );
};

export default RoomCard;
