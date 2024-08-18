import { FC } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";

import { Locale } from "shared/lib/i18n";
import { getDateString } from "shared/model";
import { StarRating } from "features/star-rating/ui";

import CloseQuotes from "./images/close-quotes.svg";
import OpenQuotes from "./images/open-quotes.svg";
import { ReviewCardProps } from "../model";
import styles from "./styles.module.scss";

export const ReviewCard: FC<ReviewCardProps> = ({ review }) => {
  const localActive = useLocale() as Locale;
  const { date, rating, text, authorImage, authorName } = review;

  return (
    <article className={styles.card}>
      <div className={styles["card__top-row"]}>
        <p>{getDateString(date, localActive)}</p>
        <StarRating rating={Number(rating)} size={13} />
      </div>
      <p className={styles.card__text}>
        <OpenQuotes className={styles.quotes__open} />
        {text}
        <CloseQuotes className={styles.quotes__close} />
      </p>

      <div className={styles["author-container"]}>
        <Image
          className={styles["author-avatar"]}
          src={authorImage}
          alt="author-image"
          width={42}
          height={42}
        />
        <p>{authorName}</p>
      </div>
    </article>
  );
};
