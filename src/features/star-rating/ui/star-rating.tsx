import { FC, Fragment } from "react";

import Star from "./images/star-full.svg";
import HalfStar from "./images/star-half.svg";
import { StarRatingProps } from "../model/types";
import styles from "./styles.module.scss";

export const StarRating: FC<StarRatingProps> = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i === Math.floor(rating) && rating % 1 !== 0) {
      stars.push({ image: <HalfStar />, id: i });
    } else {
      stars.push({ image: <Star />, id: i });
    }
  }

  return (
    <div className={styles.stars}>
      {stars.map(({ id, image }) => (
        <Fragment key={id}>{image}</Fragment>
      ))}
    </div>
  );
};
