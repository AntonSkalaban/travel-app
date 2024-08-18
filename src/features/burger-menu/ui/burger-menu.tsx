"use client";
import { FC, useState } from "react";

import { LangSwitcher } from "features/lang-switcher";
import { Nav } from "features/nav";

import styles from "./styles.module.scss";

export const BurgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  const activeClassName = isOpen ? styles.menu__icon_active : "";

  return (
    <>
      <div className={styles.menu}>
        <div
          className={`${styles.menu__icon} ${activeClassName}`}
          onClick={toggle}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div
        className={`${styles.menu__content} ${isOpen ? styles.menu__content_active : ""}`}
      >
        <Nav onClick={toggle} />
        <LangSwitcher />
      </div>
    </>
  );
};
