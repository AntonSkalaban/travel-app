"use client";
import { FC, useRef } from "react";

import { createIndexedArray } from "shared/model";
import { Wrapper } from "shared/ui/components/wrapper/ui";
import { ErrorBoundary } from "widgets/error-boundary/ui";
import { useRoomsInfinityScroll } from "entities/room";

import { RoomCard } from "./room-card";
import { RoomCardSkeleton } from "./room-card-skeleton";
import styles from "./styles.module.scss";

export const RoomsList: FC = () => {
  const loaderRef = useRef(null);

  const { loading, data: rooms } = useRoomsInfinityScroll(loaderRef?.current);

  const skeletonArray = createIndexedArray(3);
  return (
    <Wrapper>
      <ErrorBoundary>
        <section
          className={styles["rooms-list"]}
          id="rooms-list"
          data-testid="rooms-list"
        >
          {rooms?.rooms.map((room) => <RoomCard key={room.id} room={room} />)}

          {loading && skeletonArray.map((el) => <RoomCardSkeleton key={el} />)}

          <div ref={loaderRef} />
        </section>
      </ErrorBoundary>
    </Wrapper>
  );
};
