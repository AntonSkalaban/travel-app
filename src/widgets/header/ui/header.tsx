import { FC } from "react";

import { Wrapper } from "shared/ui/wrapper";
import { LangSwitcher } from "features/lang-toggle/ui";
import { Nav } from "features/nav/ui";

import Logo from "./images/logo.svg";
import styles from "./styles.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.header__container}>
          <Logo />
          <Nav />
          <LangSwitcher />
        </div>
      </Wrapper>
    </header>
  );
};
