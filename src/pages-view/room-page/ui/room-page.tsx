"use client";
import { FC } from "react";

import { useQuery } from "@apollo/client";
import { client } from "shared/api";
import { GET_ROOM, RoomResponce } from "entities/room";

import { RoomPageProps } from "../model";
import { DecorImages } from "./decor-images";
import { DecorImagesSkeleton } from "./decor-images-skeleton";
import { RoomDetails } from "./room-details";
import { RoomDetailsSkeleton } from "./room-details-skeleton";

export const RoomPage: FC<RoomPageProps> = ({ id }) => {
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
        <RoomDetailsSkeleton />
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
