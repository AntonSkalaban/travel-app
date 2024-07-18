"use client";

import { FC } from "react";

import { Link, usePathname } from "shared/lib/i18n";

import { pages } from "./model";
import styles from "./styles.module.scss";

export const Nav: FC = () => {
  const pathname = usePathname().split("/")[1];

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {pages.map(({ name, path }) => {
          return (
            <li className={styles.nav__item} key={path}>
              <Link
                className={
                  styles.nav__link +
                  (pathname === path ? " " + styles.nav__link_active : "")
                }
                href={"/" + path}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
