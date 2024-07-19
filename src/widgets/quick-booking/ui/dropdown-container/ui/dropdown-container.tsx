import { FC } from "react";

import { Dropdown, DropdownSkeleton } from "features/dropdown/ui";

import { DropdownContainerProps } from "../model/types";
import styles from "./styles.module.scss";

export const DropdownContainer: FC<DropdownContainerProps> = ({
  icon,
  title,
  selectName,
  content,
  isFetching,
}) => {
  return (
    <div className={styles["dropdown-container"]}>
      <span className={styles["dropdown-container__icon"]}>{icon}</span>
      <p className={styles["dropdown-container__title"]}>{title}</p>

      {isFetching ? (
        <DropdownSkeleton />
      ) : (
        <Dropdown selectName={selectName} content={content} />
      )}
    </div>
  );
};
