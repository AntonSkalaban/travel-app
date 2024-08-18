"use client";

import { FC } from "react";
import { useLocale } from "next-intl";

import { Link, Locale, usePathname } from "shared/lib/i18n";

import { NavProps, pages } from "../model";
import styles from "./styles.module.scss";

export const Nav: FC<NavProps> = ({ onClick }) => {
  const pathname = usePathname().split("/")[1];
  const localActive = useLocale() as Locale;

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {pages.map(({ name, path }) => {
          return (
            <li className={styles.nav__item} key={path}>
              <Link
                className={`${styles.nav__link} ${`/${pathname}` === path ? styles.nav__link_active : ""}`}
                href={path}
                onClick={handleClick}
              >
                {name[localActive]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
