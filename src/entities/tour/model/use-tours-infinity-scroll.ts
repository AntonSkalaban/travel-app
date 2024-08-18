import { useSearchParams } from "next/navigation";

import { useQuery } from "@apollo/client";
import { client } from "shared/api";
import { useObserver } from "shared/model";

import { GET_TOURS } from "../api";
import { TourResponce } from "./types";

export const useToursInfinityScroll = (loader: HTMLDivElement | null) => {
  const searchParams = useSearchParams();

  const searchQuery = searchParams?.get("q") || "";

  const variables = {
    country: searchQuery,
    offset: 0,
    limit: 3,
  };

  const { loading, data, error, fetchMore } = useQuery<TourResponce>(
    GET_TOURS,
    {
      client,
      variables,
    },
  );

  const loadMore = () => {
    fetchMore({
      variables: {
        ...variables,
        offset: data?.tours.tours.length || 0,
      },
    });
  };

  const isActive =
    (data?.tours.totalItems || 0) > (data?.tours.tours.length || 0);

  useObserver(loader, isActive, loadMore);

  return { data, loading, error };
};
