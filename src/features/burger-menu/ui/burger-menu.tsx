"use client";
import { FC, useState } from "react";

import { Overlay } from "shared/ui/components/overlay/ui";

import { BurgerMenuProps } from "../model";
import styles from "./styles.module.scss";

export const BurgerMenu: FC<BurgerMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className={styles.menu}>
        <div
          className={`${styles.menu__icon} ${isOpen ? styles.menu__icon_active : ""}`}
          onClick={toggle}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      {isOpen && <Overlay />}
      <div
        className={`${styles.menu__content} ${isOpen ? styles.menu__content_active : ""}`}
      >
        {children}
      </div>
    </>
  );
};
