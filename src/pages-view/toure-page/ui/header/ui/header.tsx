import { FC } from "react";
import { useTranslations } from "next-intl";

import { HotelHeader } from "shared/ui";

import styles from "./styles.module.scss";

export const Header: FC = () => {
  const t = useTranslations("toure.header");

  return (
    <HotelHeader>
      <h2 className={styles.header__title}>{t("title")}</h2>
      <p className={styles.header__subtitle}>{t("subtitle")}</p>
      <button className={styles.header__btn} aria-label="button">
        {t("btn")}
      </button>
    </HotelHeader>
  );
};
