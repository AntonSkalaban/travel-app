import { FC } from "react";

import { createIndexedArray } from "shared/model";

import { ToureCard } from "./toure-card/ui/toure-card";
import { ToureCardSkeleton } from "./toure-card-skeleton/ui/toure-card-skeleton";
import { CardsListProps } from "../model/types";
import styles from "./styles.module.scss";

export const CardsList: FC<CardsListProps> = ({ isFetching, cards }) => {
  return (
    <section className={styles["cards-list"]}>
      {isFetching ? (
        <>
          {createIndexedArray(3).map((el) => (
            <ToureCardSkeleton key={el} />
          ))}
        </>
      ) : (
        <>
          {cards.map(({ id, country, city, currency, flag }) => (
            <ToureCard
              key={id}
              country={country}
              city={city}
              currency={currency}
              flag={flag}
            />
          ))}
        </>
      )}
    </section>
  );
};
