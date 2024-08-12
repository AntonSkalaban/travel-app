import { FC } from "react";
import { useTranslations } from "next-intl";

import { RoomHeader } from "shared/ui/room-header/ui";
import { ScrollButton } from "features/scroll-btn";

import styles from "./styles.module.scss";

export const RoomsHeader: FC = () => {
  const t = useTranslations("rooms.header");

  return (
    <RoomHeader>
      <h2 className={styles.header__title}>{t("title")}</h2>
      <p className={styles.header__subtitle}>{t("subtitle")}</p>
      <ScrollButton targetId="#rooms-list" />
    </RoomHeader>
  );
};
