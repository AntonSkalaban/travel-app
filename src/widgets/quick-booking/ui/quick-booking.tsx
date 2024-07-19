"use client";

import { FC, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Locale } from "shared/lib/i18n";
import { Option } from "features/dropdown/ui/options-list/model";
import { OptionsList } from "features/dropdown/ui/options-list/ui";

import {
  personOptions,
  roomOptions,
} from "./dropdown-container/model/constants";
import { DropdownContainer } from "./dropdown-container/ui/dropdown-container";
import { LocationDropdownContainer } from "./dropdown-container/ui/location-dropdown-container/ui/location-dropdown-container";
import Person from "./images/Person.svg";
import Room from "./images/Room.svg";
import styles from "./styles.module.scss";

export const QuickBooking: FC = () => {
  const localActive = useLocale() as Locale;
  const t = useTranslations("home.quick-booking");

  const [location, setLocation] = useState({} as Option);
  const [person, setPerson] = useState(personOptions[0]);
  const [room, setRoom] = useState(roomOptions[localActive][0]);

  return (
    <section className={styles["quick-booking"]}>
      <div className={styles["quick-booking__dropdowns-container"]}>
        <LocationDropdownContainer
          onSelect={setLocation}
          selectOption={location}
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
              options={roomOptions[localActive]}
              selectValue={String(room.value)}
              onSelect={setRoom}
            />
          }
        />
      </div>

      <button className={styles["quick-booking__btn"]}>{t("btn")}</button>
    </section>
  );
};
