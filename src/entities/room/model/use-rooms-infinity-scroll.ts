import { useQuery } from "@apollo/client";
import client from "shared/api/apollo-client";
import { useObserver } from "shared/model";
import { GET_ROOMS } from "entities/room/api";
import { RoomsResponce } from "entities/room/model";

export const useRoomsInfinityScroll = (loader: HTMLDivElement | null) => {
  const { loading, data, error, fetchMore } = useQuery<RoomsResponce>(
    GET_ROOMS,
    {
      client,
      variables: {
        offset: 0,
        limit: 3,
      },
    },
  );

  useObserver(loader, !!(data?.rooms || []), () =>
    fetchMore({
      variables: {
        offset: data?.rooms.length,
        limit: 3,
      },
    }),
  );

  return { loading, data, error };
};
