import { FC } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Locale } from "shared/lib/i18n";

import { cards } from "../model/constants";
import styles from "./styles.module.scss";

const OurFacilite: FC = () => {
  const localActive = useLocale() as Locale;
  const t = useTranslations("home.facilite");

  return (
    <section className={styles.facilite}>
      <h2 className={styles.facilite__title}>{t("title")}</h2>
      <p className={styles.facilite__subtitle}>{t("subtitle")}</p>

      <div className={styles["cards-container"]}>
        {cards.map(({ title, image }) => (
          <div className={styles.card} key={title[localActive]}>
            {image}
            <p className={styles["card__title"]}>{title[localActive]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurFacilite;
