import { FC } from "react";
import { useTranslations } from "next-intl";

import { Filter } from "shared/ui/components/filter/ui";
import { Wrapper } from "shared/ui/components/wrapper/ui";

import { rooms } from "../model";
import { RoomCard } from "./room-card";
import styles from "./styles.module.scss";

export const Rooms: FC = () => {
  const t = useTranslations("home.rooms");

  return (
    <section className={styles.rooms}>
      <Filter />
      <Wrapper>
        <div className={styles.rooms__container}>
          <h2 className={styles.rooms__title}>{t("title")}</h2>
          <div className={styles.rooms__decor} />
          <p className={styles.rooms__subtitle}>{t("subtitle")}</p>
          <div className={styles["cards-container"]}>
            {rooms.map(({ id, image, title, count }) => (
              <RoomCard key={id} title={title} image={image} count={count} />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
