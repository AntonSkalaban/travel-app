"use client";

import { FC, FormEvent, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Locale } from "shared/lib";
import { BookingModal } from "widgets/booking-modal";
import { getLocalizedOptions, OptionsList } from "features/dropdown";

import Location from "./images/Location.svg";
import Person from "./images/Person.svg";
import Room from "./images/Room.svg";
import {
  DropdownContainer,
  personOptions,
  roomOptions,
} from "../../dropdown-container";
import { QuickBookingProps } from "../model";
import styles from "./styles.module.scss";

export const QuickBooking: FC<QuickBookingProps> = ({ locationOptions }) => {
  const localActive = useLocale() as Locale;
  const t = useTranslations("home.quick-booking");

  const localizedRoomOptions = useMemo(
    () => getLocalizedOptions(roomOptions, localActive),
    [localActive],
  );

  const [location, setLocation] = useState(locationOptions[0]);
  const [person, setPerson] = useState(personOptions[0]);
  const [room, setRoom] = useState(localizedRoomOptions[0]);

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <BookingModal
          person={person.name}
          location={location.name}
          room={room.name}
          onClose={closeModal}
        />
      )}
      <form className={styles["quick-booking"]} onSubmit={handleSubmit}>
        <div className={styles["quick-booking__dropdowns-container"]}>
          <DropdownContainer
            icon={<Location />}
            title={t("location")}
            selectName={location.name}
            content={
              <OptionsList
                options={locationOptions}
                selectValue={String(location.value)}
                onSelect={setLocation}
              />
            }
          />

          <DropdownContainer
            icon={<Person />}
            title={t("person")}
            selectName={person.name}
            content={
              <OptionsList
                options={personOptions}
                selectValue={String(person.value)}
                onSelect={setPerson}
              />
            }
          />

          <DropdownContainer
            icon={<Room />}
            title={t("roomType")}
            selectName={room.name}
            content={
              <OptionsList
                options={localizedRoomOptions}
                selectValue={String(room.value)}
                onSelect={setRoom}
              />
            }
          />
        </div>

        <button
          className={styles["quick-booking__btn"]}
          type="submit"
          data-testid="quick-booking-btn"
        >
          {t("btn")}
        </button>
      </form>
    </>
  );
};
