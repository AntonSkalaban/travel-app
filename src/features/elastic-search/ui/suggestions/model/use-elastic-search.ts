import { useEffect } from "react";

import { useQuery } from "@apollo/client";
import { client } from "shared/api";
import { useDebounce } from "shared/model";
import { GET_TOURS_COUNTRIES, TourCountryResponce } from "entities/tour";

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
