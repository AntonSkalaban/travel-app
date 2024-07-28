import { useEffect } from "react";

import { useQuery } from "@apollo/client";
import client from "shared/api/apollo-client";
import { LIST_ROOMS } from "entities/room/api";
import { RoomsResponce } from "entities/room/model";

export const useInfinityScroll = (loader: HTMLDivElement | null) => {
  const {
    loading,
    data: rooms,
    fetchMore,
  } = useQuery<RoomsResponce>(LIST_ROOMS, {
    client,
    variables: {
      offset: 0,
      limit: 3,
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];

      if (target.isIntersecting && rooms) {
        fetchMore({
          variables: {
            offset: rooms?.rooms.length,
            limit: 3,
          },
        });
      }
    });

    if (loader) observer.observe(loader);

    return () => {
      if (loader) observer.unobserve(loader);
    };
  }, [fetchMore, loader, rooms]);

  return { loading, data: rooms };
};
