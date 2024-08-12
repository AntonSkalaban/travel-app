"use client";

import { FC, FormEvent, useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import { useLocale, useTranslations } from "next-intl";

import { Locale } from "shared/lib";
import { getDateString } from "shared/model";
import { BookingModal } from "widgets/booking-modal";
import { getLocalizedOptions, OptionsList } from "features/dropdown";

import Location from "./images/Location.svg";
import Person from "./images/Person.svg";
import Room from "./images/Room.svg";
import {
  personOptions,
  roomOptions,
} from "../../dropdown-container/model/constants";
import { DropdownContainer } from "../../dropdown-container/ui/dropdown-container";
import { QuickBookingProps } from "../model/types";
import styles from "./styles.module.scss";

import "react-datepicker/dist/react-datepicker.css";

export const QuickBooking: FC<QuickBookingProps> = ({ locationOptions }) => {
  const localActive = useLocale() as Locale;
  const t = useTranslations("home.quick-booking");

  const localizedRoomOptions = useMemo(
    () => getLocalizedOptions(roomOptions, localActive),
    [localActive],
  );

  //   const [bookingData, setBookingData] = useState({
  //     location: locationOptions[0],
  //     person: personOptions[0],
  //     room: localizedRoomOptions[0],
  //     startDate: new Date(),
  //     endDate: new Date(),
  //   });
  // const handleChange = (newData: s) => {

  // }
  const [location, setLocation] = useState(locationOptions[0]);
  const [person, setPerson] = useState(personOptions[0]);
  const [room, setRoom] = useState(localizedRoomOptions[0]);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
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
            title={t("startDate")}
            selectName={startDate ? getDateString(startDate, localActive) : ""}
            content={
              <DatePicker
                selected={startDate}
                onSelect={handleStartDateChange}
                onChange={handleStartDateChange}
              />
            }
          />

          <DropdownContainer
            icon={<Person />}
            title={t("endDate")}
            selectName={endDate ? getDateString(endDate, localActive) : ""}
            content={
              <DatePicker
                selected={endDate}
                onSelect={handleEndDateChange}
                onChange={handleEndDateChange}
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

        <button className={styles["quick-booking__btn"]} type="submit">
          {t("btn")}
        </button>
      </form>
    </>
  );
};
