import { FC } from "react";
import { createPortal } from "react-dom";

import { Overlay } from "shared/ui/overlay/ui";

import styles from "./styles.module.scss";

export interface ModalProps {
  children: React.ReactNode;
  close: () => void;
}

export const Modal: FC<ModalProps> = ({ children, close }) => {
  return createPortal(
    <>
      <Overlay />
      <div className={styles.modal}>
        <button className={styles.modal__close} onClick={close}>
          X
        </button>
        <div className={styles.modal__content}>{children}</div>
      </div>
    </>,
    document.body,
  );
};
