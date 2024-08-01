"use client";
import { FC, useState } from "react";

import { RoomImagesViewer } from "widgets/room-images-viewer/ui/room-images-viewer";
import { StarRating } from "features/star-rating/ui";

import { ReservationModal } from "../reservation-modal/ui/reservation-form";
import styles from "./styles.module.scss";

interface RoomInfoProps {
  id: string;
  images: string[];
  title: string;
  price: number;
  rating: string;
  reviews: number;
  description: string;
}
export const RoomInfo: FC<RoomInfoProps> = ({
  id,
  images,
  title,
  price,
  rating,
  reviews,
  description,
}) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
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
                {reviews} Customer Review
              </p>
            </div>
            <div
              className={styles.description__description}
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </div>
          <button className={styles.btn} onClick={() => setShowModal(true)}>
            Reservation
          </button>
        </div>
      </section>
    </>
  );
};
