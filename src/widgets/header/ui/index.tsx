import { FC } from "react";

import { Wrapper } from "shared/ui/wrapper";

import { Nav } from "./nav";
import styles from "./styles.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.header__container}>
          Header
          <Nav />
        </div>
      </Wrapper>
    </header>
  );
};
