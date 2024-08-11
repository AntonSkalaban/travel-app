import { FC } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Locale } from "shared/lib/i18n";
import { Wrapper } from "shared/ui/components/wrapper/ui";

import { cards } from "../model";
import { FaciliteCard } from "./facilite-card";
import styles from "./styles.module.scss";

export const OurFacilite: FC = () => {
  const localActive = useLocale() as Locale;
  const t = useTranslations("home.facilite");

  return (
    <section className={styles.facilite}>
      <Wrapper>
        <h2 className={styles.facilite__title}>{t("title")}</h2>
        <p className={styles.facilite__subtitle}>{t("subtitle")}</p>

        <div className={styles["cards-container"]}>
          {cards.map(({ title, image }) => (
            <FaciliteCard
              key={title[localActive]}
              title={title[localActive]}
              image={image}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};
