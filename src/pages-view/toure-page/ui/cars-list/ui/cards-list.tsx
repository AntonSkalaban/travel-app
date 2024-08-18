import { FC, useRef } from "react";

import { createIndexedArray } from "shared/model";
import { useToursInfinityScroll } from "entities/tour";

import { ToureCard } from "./toure-card";
import { ToureCardSkeleton } from "./toure-card-skeleton";
import styles from "./styles.module.scss";

export const CardsList: FC = () => {
  const loaderRef = useRef(null);

  const { data, loading, error } = useToursInfinityScroll(loaderRef.current);

  if (error) return <p>Error</p>;
  if (!loading && !data?.tours) return <p>Not Found</p>;

  return (
    <section className={styles["cards-list"]}>
      {data?.tours.tours.map((tour) => <ToureCard key={tour.id} tour={tour} />)}

      {loading &&
        createIndexedArray(3).map((el) => <ToureCardSkeleton key={el} />)}
      <div ref={loaderRef} />
    </section>
  );
};
