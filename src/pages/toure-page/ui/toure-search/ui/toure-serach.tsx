import { FC } from "react";
import { useSearchParams } from "next/navigation";

import { ElasticSearch } from "features/search-bar/ui";

import styles from "./styles.module.scss";

export const ToureSearch: FC = () => {
  const searchParams = useSearchParams();

  const searchQuery = searchParams?.get("q") || "";

  return (
    <section className={styles.search}>
      <h1 className={styles.search__title}>Tour search </h1>
      <p className={styles.search__subtitle}>Choose a tour to any country</p>
      <ElasticSearch initialValue={searchQuery} />
    </section>
  );
};
