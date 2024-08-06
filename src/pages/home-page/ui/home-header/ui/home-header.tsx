import { FC } from "react";
import { useTranslations } from "next-intl";

import { HotelHeader } from "shared/ui/hotel-header/ui/hotel-header";
import { FetchingQuickBooking } from "widgets/quick-booking/ui/fetching-quick-booking/ui/fetching-quick-booking";

import Play from "./images/Play.svg";
import styles from "./styles.module.scss";

const HomeHeader: FC = () => {
  const t = useTranslations("home");

  return (
    <HotelHeader>
      <h1 className={styles["header__title"]}>{t("title")}</h1>
      <p className={styles["header__subtitle"]}>{t("subtitle")}</p>

      <button className={styles["header__btn"]}>
        <span className={styles["header__btn__elipce"]}>
          <Play />
        </span>
        {t("btn")}
      </button>

      <FetchingQuickBooking />
    </HotelHeader>
  );
};

export default HomeHeader;
