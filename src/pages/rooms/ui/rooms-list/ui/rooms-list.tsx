"use client";
import { FC, useRef } from "react";

import { createIndexedArray } from "shared/model";
import { Wrapper } from "shared/ui/wrapper";
import { useRoomsInfinityScroll } from "entities/room/model/use-rooms-infinity-scroll";

import { RoomCard } from "./room-card/ui/room-card";
import { RoomCardSkeleton } from "./room-card-skeleton/room-card-skeleton";
import styles from "./styles.module.scss";

export const RoomsList: FC = () => {
  const loaderRef = useRef(null);

  const { loading, data: rooms } = useRoomsInfinityScroll(loaderRef?.current);

  const arr = createIndexedArray(3);
  return (
    <Wrapper>
      <section className={styles["rooms-list"]} id="rooms-list">
        {rooms?.rooms.map(({ id, title, images, price, available }) => (
          <RoomCard
            key={id}
            id={id}
            title={title}
            image={images[0]}
            price={price}
            available={available}
          />
        ))}

        {loading && arr.map((el) => <RoomCardSkeleton key={el} />)}

        <div ref={loaderRef} />
      </section>
    </Wrapper>
  );
};
