"use client";
import { FC, useRef } from "react";

import { createIndexedArray } from "shared/model";
import { Wrapper } from "shared/ui/wrapper";
import { ErrorBoundary } from "widgets/error-boundary/ui";
import { useRoomsInfinityScroll } from "entities/room/model/use-rooms-infinity-scroll";

import { RoomCard } from "./room-card/ui/room-card";
import { RoomCardSkeleton } from "./room-card-skeleton/ui/room-card-skeleton";
import styles from "./styles.module.scss";

const RoomsList: FC = () => {
  const loaderRef = useRef(null);

  const { loading, data: rooms } = useRoomsInfinityScroll(loaderRef?.current);

  const skeletonArray = createIndexedArray(3);
  return (
    <Wrapper>
      <ErrorBoundary>
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

          {loading && skeletonArray.map((el) => <RoomCardSkeleton key={el} />)}

          <div ref={loaderRef} />
        </section>
      </ErrorBoundary>
    </Wrapper>
  );
};

export default RoomsList;
