import { FC } from "react";
import Image from "next/image";

import { useRouter } from "shared/lib/i18n";

import { CardIcons } from "./card-icons/card-icons";
import { RoomCardProps } from "../model";
import styles from "./styles.module.scss";

export const RoomCard: FC<RoomCardProps> = ({
  id,
  title,
  image,
  price,
  available,
}) => {
  const router = useRouter();

  const handleClick = (id: number) => () => {
    router.push("/room/" + id);
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
            Available: {available ? "Yes" : "No"}
          </p>
        </div>
        <p className={styles.card__price}>₦{price}</p>
      </div>
      <div className={styles["card__description-bottom"]}>
        <CardIcons />
        <button className={styles.card__btn} onClick={handleClick(id)}>
          Book now
        </button>
      </div>
    </article>
  );
};
