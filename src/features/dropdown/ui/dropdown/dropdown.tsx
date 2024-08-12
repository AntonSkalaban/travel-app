import { FC, useState } from "react";

import Checkmark from "./images/Checkmark.svg";
import { DropdownProps } from "./model";
import styles from "./styles.module.scss";

export const Dropdown: FC<DropdownProps> = ({ selectName, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.dropdown}>
      <p className={styles.dropdown__header} onClick={handleClick}>
        <span className={styles.dropdown__name}>{selectName}</span>{" "}
        <Checkmark />
      </p>
      {isOpen && <div className={styles.dropdown__content}>{content}</div>}
    </div>
  );
};
