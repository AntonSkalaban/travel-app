import { useEffect } from "react";

import { useQuery } from "@apollo/client";
import client from "shared/api/apollo-client";
import { useDebounce } from "shared/model";
import { GET_TOURS_COUNTRIES } from "entities/tour/api";
import { TourCountryResponce } from "entities/tour/model";

export const useElasticSearch = (searchValue: string) => {
  const debouncedValue = useDebounce(searchValue);

  const { loading, data, fetchMore } = useQuery<TourCountryResponce>(
    GET_TOURS_COUNTRIES,
    {
      client,
      variables: {
        country: debouncedValue,
      },
    },
  );

  useEffect(() => {
    fetchMore({
      variables: {
        country: debouncedValue,
      },
    });
  }, [fetchMore, debouncedValue]);

  return { loading, data };
};
