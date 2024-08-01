"use client";
import { FC } from "react";

import { useQuery } from "@apollo/client";
import client from "shared/api/apollo-client";
import { GET_TOURS } from "entities/tour/api";
import { TourResponce } from "entities/tour/model";

import { CardsList } from "./cars-list/ui/cards-list";

export const TourePage: FC = () => {
  const {
    data: tours,
    loading,
    error,
  } = useQuery<TourResponce>(GET_TOURS, {
    client,
  });

  if (error) return <p>Error</p>;
  if (!loading && !tours?.tours) return <p>Not Found</p>;
  return (
    <>
      <CardsList isFetching={loading} cards={tours?.tours || []} />
    </>
  );
};
