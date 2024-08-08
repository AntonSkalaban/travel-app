import { FC } from "react";
import { useTranslations } from "next-intl";

import { HotelHeader } from "shared/ui/hotel-header/ui/hotel-header";

import styles from "./styles.module.scss";

const Header: FC = () => {
  const t = useTranslations("toure.header");

  return (
    <HotelHeader>
      <h2 className={styles.header__title}>{t("title")}</h2>
      <p className={styles.header__subtitle}>{t("subtitle")}</p>
      <button className={styles.header__btn}>{t("btn")}</button>
    </HotelHeader>
  );
};

export default Header;
