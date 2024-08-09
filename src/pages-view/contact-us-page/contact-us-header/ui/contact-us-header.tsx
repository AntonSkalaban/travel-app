import { FC } from "react";
import { useTranslations } from "next-intl";

import { RoomHeader } from "shared/ui/room-header/ui";

import styles from "./styles.module.scss";

const ContactUsHeader: FC = () => {
  const t = useTranslations("contactUs.header");

  return (
    <RoomHeader>
      <h1 className={styles["header__title"]}>{t("title")}</h1>
      <p className={styles["header__subtitle"]}>{t("subtitle")}</p>
    </RoomHeader>
  );
};

export default ContactUsHeader;
