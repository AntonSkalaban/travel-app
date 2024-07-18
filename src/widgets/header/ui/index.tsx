import { FC } from "react";

import { Wrapper } from "shared/ui/wrapper";
import { LangSwitcher } from "features/lang-toggle/ui";

import Logo from "./logo/logo.svg";
import { Nav } from "./nav";
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
