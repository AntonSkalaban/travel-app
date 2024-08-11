"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import { HotelHeader } from "shared/ui";
import { FetchingQuickBooking } from "widgets/quick-booking/ui/fetching-quick-booking/ui/fetching-quick-booking";
import { pagesPathsEnam } from "features/nav";

import Play from "./images/Play.svg";
import styles from "./styles.module.scss";

export const HomeHeader: FC = () => {
  const router = useRouter();

  const t = useTranslations("home");

  const handleClick = () => () => {
    router.push(`/${pagesPathsEnam.Toure}`);
  };

  return (
    <HotelHeader>
      <h1 className={styles["header__title"]}>{t("title")}</h1>
      <p className={styles["header__subtitle"]}>{t("subtitle")}</p>

      <button className={styles["header__btn"]} onClick={handleClick}>
        <span className={styles["header__btn__elipce"]}>
          <Play />
        </span>
        {t("btn")}
      </button>

      <FetchingQuickBooking />
    </HotelHeader>
  );
};
