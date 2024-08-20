import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { useRouter } from "shared/lib/i18n";
import { pagesPathsEnam } from "features/nav";

import { RoomCardProps } from "../model";
import { CardIcons } from "./card-icons";
import styles from "./styles.module.scss";

export const RoomCard: FC<RoomCardProps> = ({ room }) => {
  const router = useRouter();
  const t = useTranslations("rooms.roomsList");

  const { id, title, images, price, available } = room;

  const handleClick = (id: number) => () => {
    router.push(`/${pagesPathsEnam.Room}/` + id);
  };

  return (
    <article className={styles.card} data-testid="room-card">
      <Image
        className={styles.card__img}
        width={100}
        height={100}
        src={images[0]}
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
        <button
          data-testid="room-info-btn"
          className={styles.card__btn}
          onClick={handleClick(id)}
          aria-label="roon info button"
        >
          {t("btn")}
        </button>
      </div>
    </article>
  );
};
