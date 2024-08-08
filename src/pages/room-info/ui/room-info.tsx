"use client";
import { FC } from "react";

import { useQuery } from "@apollo/client";
import client from "shared/api/apollo-client";
import { GET_ROOM } from "entities/room/api";
import { RoomResponce } from "entities/room/model";

import DecorImages from "./decor-images/ui";
import DecorImagesSkeleton from "./decor-images-skeleton/ui";
import RoomDetails from "./room-details/ui";
import RoomInfoSkeleton from "./room-details-skeleton/ui";
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
      <RoomDetails
        id={String(id)}
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
