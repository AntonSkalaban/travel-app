import { FC } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

import { ElasticSearch } from "features/elastic-search";

import styles from "./styles.module.scss";

export const ToureSearch: FC = () => {
  const t = useTranslations("toure.toureSeatch");
  const searchParams = useSearchParams();

  const searchQuery = searchParams?.get("q") || "";

  return (
    <section className={styles.search}>
      <h1 className={styles.search__title}>{t("title")}</h1>
      <p className={styles.search__subtitle}>{t("subtitle")}</p>
      <ElasticSearch initialValue={searchQuery} />
    </section>
  );
};
