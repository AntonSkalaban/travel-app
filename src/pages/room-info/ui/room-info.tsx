"use client";
import { FC } from "react";

import { useQuery } from "@apollo/client";
import client from "shared/api/apollo-client";
import { GET_ROOM } from "entities/room/api";
import { RoomResponce } from "entities/room/model";

import { DecorImages } from "./decor-images/ui/decor-images";
import { DecorImagesSkeleton } from "./decor-images-skeleton/ui/decor-images-skeleton";
import { RoomInfo } from "./room-info/ui/room-info";
import { RoomInfoSkeleton } from "./room-info-skeleton/ui/room-info-skeleton";
import { RoomPageProps } from "../model";

const RoomPage: FC<RoomPageProps> = ({ id }) => {
  const {
    loading,
    data: room,
    error,
  } = useQuery<RoomResponce>(GET_ROOM, {
    client,
    variables: {
      id,
    },
  });

  if (loading)
    return (
      <>
        <RoomInfoSkeleton />
        <DecorImagesSkeleton />
      </>
    );

  if (error || !room?.room) return <h2>Error...</h2>;

  const { images, title, price, rating, reviews, description, decorImages } =
    room.room;

  return (
    <>
      <RoomInfo
        images={images}
        title={title}
        price={price}
        rating={rating}
        reviews={reviews}
        description={description}
      />
      <DecorImages images={decorImages} />
    </>
  );
};

export default RoomPage;
