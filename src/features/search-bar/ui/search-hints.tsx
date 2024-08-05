import { FC } from "react";

import { highlightSustrting, useElasticSearch } from "../model";
import styles from "./styles.module.scss";

export const SearcHints: FC<{
  searchValue: string;
  onClick: (country: string) => void;
}> = ({ searchValue, onClick }) => {
  const { data: hints } = useElasticSearch(searchValue);

  return (
    <div className={styles["hints-container"]}>
      {hints?.toursCountries.length ? (
        <ul className={styles.hints__list}>
          {hints?.toursCountries?.map(({ country }) => {
            const highlightedSubstring = highlightSustrting(
              country,
              searchValue,
              styles.highlight,
            );

            return (
              <li
                key={country}
                className={styles.hint}
                dangerouslySetInnerHTML={{ __html: highlightedSubstring }}
                onClick={() => onClick(country)}
              />
            );
          })}
        </ul>
      ) : (
        <p className={styles["not-fond"]}>Not results found</p>
      )}
    </div>
  );
};
