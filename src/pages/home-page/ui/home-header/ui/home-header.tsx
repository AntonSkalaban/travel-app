import { FC } from "react";
import { useTranslations } from "next-intl";

import { Wrapper } from "shared/ui/wrapper";
import { FetchingQuickBooking } from "widgets/quick-booking/ui/fetching-quick-booking/ui/fetching-quick-booking";

import Play from "./images/Play.svg";
import styles from "./styles.module.scss";

const HomeHeader: FC = () => {
  const t = useTranslations("home");

  return (
    <section className={styles["home-header"]}>
      <Wrapper>
        <div className={styles["home-header__container"]}>
          <div>
            <p className={styles["home-header__logo"]}>Paradise View</p>
            <h1 className={styles["home-header__title"]}>{t("title")}</h1>
            <p className={styles["home-header__text"]}>{t("subtitle")}</p>

            <button className={styles["home-header__btn"]}>
              <span className={styles["home-header__btn-elipce"]}>
                <Play />
              </span>
              {t("btn")}
            </button>
          </div>

          <FetchingQuickBooking />
        </div>
      </Wrapper>
    </section>
  );
};

export default HomeHeader;
