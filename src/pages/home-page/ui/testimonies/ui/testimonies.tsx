"use client";
import { FC } from "react";

import { useQuery } from "@apollo/client";
import client from "shared/api/apollo-client";
import { useSlider } from "shared/model";
import { Wrapper } from "shared/ui/wrapper";
import { LIST_REVIEWS } from "widgets/review-card/api";
import { ReviewResponce } from "widgets/review-card/model";
import { ReviewCard } from "widgets/review-card/ui";
import { ReviewCardSkeleton } from "widgets/review-card/ui/review-card-skeleton";

import Arrow from "./images/arrow.svg";
import styles from "./styles.module.scss";

const Testimonies: FC = () => {
  const reviewsPerSlide = 2;

  const {
    data: reviews,
    loading,
    error,
  } = useQuery<ReviewResponce>(LIST_REVIEWS, {
    client,
  });

  const { page, isFirstSlide, isLastSlide, toNextSlide, toPrevSlide } =
    useSlider(Math.round((reviews?.reviews?.length || 0) / reviewsPerSlide));

  const handlePrevSlideClick = () => {
    toPrevSlide();
  };

  const handleNextSlideClick = () => {
    toNextSlide();
  };

  return (
    <section className={styles.testimonials}>
      <Wrapper>
        <h2 className={styles.testimonials__title}>Testimonies</h2>

        <div className={styles["btns-container"]}>
          <button
            className={`${styles.btn} ${styles["btn-prev"]}`}
            onClick={handlePrevSlideClick}
            disabled={isFirstSlide || loading}
          >
            <Arrow />
          </button>
          <button
            className={`${styles.btn} ${styles["btn-next"]}`}
            onClick={handleNextSlideClick}
            disabled={isLastSlide || loading}
          >
            <Arrow />
          </button>
        </div>

        <div className={styles["slider-wrapper"]}>
          <div
            className={styles["testimonials__cards-container"]}
            style={{ left: `${page * 100}%` }}
          >
            {loading || error ? (
              <>
                <ReviewCardSkeleton />
                <ReviewCardSkeleton />
              </>
            ) : (
              <>
                {reviews?.reviews?.map(
                  ({ id, date, rating, text, authorImage, authorName }) => (
                    <ReviewCard
                      key={id}
                      date={date}
                      rating={rating}
                      text={text}
                      authorImage={authorImage}
                      authorName={authorName}
                    />
                  ),
                )}
              </>
            )}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Testimonies;
