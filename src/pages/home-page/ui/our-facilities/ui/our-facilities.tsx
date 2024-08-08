import { FC } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Locale } from "shared/lib/i18n";
import { Wrapper } from "shared/ui/wrapper";

import { cards } from "../model/constants";
import styles from "./styles.module.scss";

const OurFacilite: FC = () => {
  const localActive = useLocale() as Locale;
  const t = useTranslations("home.facilite");

  return (
    <section className={styles.facilite}>
      <Wrapper>
        <h2 className={styles.facilite__title}>{t("title")}</h2>
        <p className={styles.facilite__subtitle}>{t("subtitle")}</p>

        <div className={styles["cards-container"]}>
          {cards.map(({ title, image }) => (
            <div className={styles.card} key={title[localActive]}>
              <div className={styles.card__svg}>{image}</div>

              <p className={styles["card__title"]}>{title[localActive]}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default OurFacilite;
