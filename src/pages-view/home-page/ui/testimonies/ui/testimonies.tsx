"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";

import { useQuery } from "@apollo/client";
import client from "shared/api/apollo-client";
import { useSlider } from "shared/model";
import { Wrapper } from "shared/ui/wrapper";
import { ReviewResponce } from "widgets/review-card/model";
import { ReviewCard } from "widgets/review-card/ui";
import { ReviewCardSkeleton } from "widgets/review-card/ui/review-card-skeleton";
import { GET__REVIEWS } from "entities/review/api";

import Arrow from "./images/arrow.svg";
import styles from "./styles.module.scss";

const Testimonies: FC = () => {
  const t = useTranslations("home.testimonies");
  const {
    data: reviews,
    loading,
    error,
  } = useQuery<ReviewResponce>(GET__REVIEWS, {
    client,
  });

  const itemsPerSlide = 2;
  const totalSlides = Math.round(reviews?.reviews?.length || 0);

  const { page, isFirstSlide, isLastSlide, toNextSlide, toPrevSlide } =
    useSlider(totalSlides / itemsPerSlide);

  return (
    <section className={styles.testimonials}>
      <Wrapper>
        <h2 className={styles.testimonials__title}>{t("title")}</h2>

        <div className={styles["btns-container"]}>
          <button
            className={`${styles.btn} ${styles["btn-prev"]}`}
            onClick={toPrevSlide}
            disabled={isFirstSlide || loading}
          >
            <Arrow />
          </button>
          <button
            className={`${styles.btn} ${styles["btn-next"]}`}
            onClick={toNextSlide}
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
