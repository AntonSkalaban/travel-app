import { FC } from "react";
import { useTranslations } from "next-intl";

import { Modal } from "shared/ui";

import { BookingModalProps } from "../model";
import { BookingForm } from "./booking-form";
import styles from "./styles.module.scss";

export const BookingModal: FC<BookingModalProps> = ({
  person,
  location,
  room,
  onClose,
}) => {
  const t = useTranslations("home.modal");

  return (
    <Modal close={onClose}>
      <div className={styles.container} data-testid="booking-modal">
        <h2>{t("title")}</h2>
        <p>
          {t("location")}: {location}
          <br />
          {t("person")}:{person}
          <br />
          {t("room")}: {room}
        </p>
        <BookingForm formData={{ person, location, room }} />
      </div>
    </Modal>
  );
};
