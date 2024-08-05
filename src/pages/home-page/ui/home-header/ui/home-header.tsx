import { FC } from "react";
import { useTranslations } from "next-intl";

import { Wrapper } from "shared/ui/wrapper";
import { FetchingQuickBooking } from "widgets/quick-booking/ui/fetching-quick-booking/ui/fetching-quick-booking";

import Play from "./images/Play.svg";
import styles from "./styles.module.scss";

const HomeHeader: FC = () => {
  const t = useTranslations("home");

  return (
    <section className={styles["header"]}>
      <Wrapper>
        <div className={styles["header__container"]}>
          <div>
            <p className={styles["header__logo"]}>Paradise View</p>
            <h1 className={styles["header__title"]}>{t("title")}</h1>
            <p className={styles["header__subtitle"]}>{t("subtitle")}</p>

            <button className={styles["header__btn"]}>
              <span className={styles["header__btn-elipce"]}>
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
