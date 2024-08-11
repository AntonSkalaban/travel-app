import { FC } from "react";

import { Wrapper } from "shared/ui";
import { BurgerMenu } from "features/burger-menu";
import { LangSwitcher } from "features/lang-switcher";
import { Nav } from "features/nav";

import Logo from "./images/logo.svg";
import styles from "./styles.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.header__container}>
          <Logo />

          <BurgerMenu>
            <Nav />
            <LangSwitcher />
          </BurgerMenu>

          <div className={styles.header__menu}>
            <Nav />
            <LangSwitcher />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
