import { FC } from "react";

import { Option, OptionsListProps } from "../model";
import styles from "./styles.module.scss";

export const OptionsList: FC<OptionsListProps> = ({
  options,
  selectValue,
  onSelect,
}) => {
  const handleClick = (option: Option) => () => {
    onSelect(option);
  };

  return (
    <ul className={styles["options-list"]}>
      {options.map(({ name, value }) => (
        <li
          key={name}
          className={`${styles["options-list__option"]} ${String(value) === selectValue ? styles["options-list__option_active"] : ""}`}
          onClick={handleClick({ name, value })}
        >
          {name}
        </li>
      ))}
    </ul>
  );
};
