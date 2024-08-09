import { FC } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Link, Locale } from "shared/lib/i18n";
import { Wrapper } from "shared/ui/wrapper";
import { Subscribe } from "features/subscribe/ui";

import { data } from "../model/constants";
import styles from "./styles.module.scss";

export const Footer: FC = () => {
  const t = useTranslations("footer");
  const localActive = useLocale() as Locale;

  return (
    <footer className={styles.footer}>
      <Wrapper>
        <div className={styles["footer__container-top"]}>
          <div className={styles.footer__description}>
            <h4 className={styles.footer__logo}>Paradise view</h4>
            <p
              className={`${styles.footer__text} ${styles["footer__logo-text"]}`}
            >
              {t("logoText")}
            </p>
          </div>
          <div className={styles["footer__lists-container"]}>
            {data.map(({ title, links }) => (
              <div key={title[localActive]} className={styles.links}>
                <p className={styles.footer__title}>{title[localActive]}</p>
                <ul className={styles.footer__list}>
                  {links.map(({ name, link }) => (
                    <li key={link} className={styles.footer__text}>
                      <Link href={link}>{name[localActive]}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.newsletter}>
            <div className={styles["newsletter__text-container"]}>
              <p className={styles.footer__title}>{t("newsletter")}</p>
              <p
                className={`${styles.footer__text} ${styles["newsletter__text"]}`}
              >
                {t("newsletterText")}
              </p>
            </div>
            <Subscribe />
          </div>
        </div>
      </Wrapper>
      <div className={styles["footer__container-bottom"]}>
        Paradise view {new Date().getFullYear()}
      </div>
    </footer>
  );
};
