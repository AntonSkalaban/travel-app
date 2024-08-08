"use client";
import { FC, useState } from "react";
import { useTranslations } from "next-intl";

import { RoomImagesViewer } from "widgets/room-images-viewer/ui/room-images-viewer";
import { StarRating } from "features/star-rating/ui";

import { RoomDetailsProps } from "../model";
import { ReservationModal } from "../reservation-modal/ui/reservation-modal";
import styles from "./styles.module.scss";

export const RoomDetails: FC<RoomDetailsProps> = ({
  id,
  images,
  title,
  price,
  rating,
  reviews,
  description,
}) => {
  const t = useTranslations("room.details");

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <ReservationModal roomId={id} roomName={title} onClose={closeModal} />
      )}
      <section className={styles.section}>
        <RoomImagesViewer images={images} />
        <div className={styles["info-container"]}>
          <div className={styles.description}>
            <h3 className={styles.description__title}>{title}</h3>
            <p className={styles.description__price}>₦{price}</p>
            <div className={styles.description__row}>
              <StarRating size={18} rating={Number(rating)} />
              <p className={styles.description__review}>
                {reviews} {t("review")}
              </p>
            </div>
            <div
              className={styles.description__description}
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </div>
          <button className={styles.btn} onClick={handleClick}>
            {t("btn")}
          </button>
        </div>
      </section>
    </>
  );
};

export default RoomDetails;
