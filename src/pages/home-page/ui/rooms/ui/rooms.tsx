import { FC } from "react";
import { useTranslations } from "next-intl";

import { Filter } from "shared/ui/filter/ui";
import { Wrapper } from "shared/ui/wrapper";

import { RoomCard } from "./room-card/ui/room-card";
import { rooms } from "../model/constants";
import styles from "./styles.module.scss";

const Rooms: FC = () => {
  const t = useTranslations("home.rooms");

  return (
    <section className={styles.rooms}>
      <Filter>
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
      </Filter>
    </section>
  );
};

export default Rooms;
