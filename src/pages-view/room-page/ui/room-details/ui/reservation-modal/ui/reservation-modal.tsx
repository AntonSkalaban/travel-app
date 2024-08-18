import { FC } from "react";

import { Modal, withEmailForm } from "shared/ui";

import { ReservationModalProps } from "../model";
import { Form } from "../reservation-from";
import styles from "./styles.module.scss";

export const ReservationFrom = withEmailForm(Form);

export const ReservationModal: FC<ReservationModalProps> = ({
  reservationData,
  onClose,
}) => {
  return (
    <Modal close={onClose}>
      <div className={styles.container} data-testid="reservation-modal">
        <ReservationFrom formData={reservationData} />
      </div>
    </Modal>
  );
};
