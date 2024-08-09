import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { useRouter } from "shared/lib/i18n";
import { pagesPathsEnam } from "features/nav/model/types";

import { CardIcons } from "./card-icons/card-icons";
import { RoomCardProps } from "../model/types";
import styles from "./styles.module.scss";

export const RoomCard: FC<RoomCardProps> = ({
  id,
  title,
  image,
  price,
  available,
}) => {
  const router = useRouter();
  const t = useTranslations("rooms.roomsList");

  const handleClick = (id: number) => () => {
    router.push(`/${pagesPathsEnam.Room}/` + id);
  };

  return (
    <article className={styles.card}>
      <Image
        className={styles.card__img}
        width={100}
        height={100}
        src={image}
        alt="room-image"
      />
      <div className={styles["card__description-top"]}>
        <div className={styles.card__row}>
          <h4 className={styles.card__title}>{title}</h4>
          <p className={styles.card__available}>
            {t("available")}: {t(`${available ? "yes" : "no"}`)}
          </p>
        </div>
        <p className={styles.card__price}>₦{price}</p>
      </div>
      <div className={styles["card__description-bottom"]}>
        <CardIcons />
        <button className={styles.card__btn} onClick={handleClick(id)}>
          {t("btn")}
        </button>
      </div>
    </article>
  );
};
