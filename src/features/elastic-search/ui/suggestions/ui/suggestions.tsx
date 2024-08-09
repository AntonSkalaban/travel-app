import { FC } from "react";

import {
  highlightSustrting,
  SuggestionProps,
  useElasticSearch,
} from "../model";
import styles from "./styles.module.scss";

export const Suggestions: FC<SuggestionProps> = ({ searchValue, onClick }) => {
  const { data: suggestions } = useElasticSearch(searchValue);

  return (
    <div className={styles.suggestions}>
      {suggestions?.toursCountries.length ? (
        <ul className={styles.suggestions__list}>
          {suggestions?.toursCountries?.map(({ country }) => {
            const highlightedSubstring = highlightSustrting(
              country,
              searchValue,
              styles.highlight,
            );

            return (
              <li
                key={country}
                className={styles.suggestions__item}
                dangerouslySetInnerHTML={{ __html: highlightedSubstring }}
                onClick={() => onClick(country)}
              />
            );
          })}
        </ul>
      ) : (
        <p className={styles["suggestions__not-found"]}>Not results found</p>
      )}
    </div>
  );
};
