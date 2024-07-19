import { FC } from "react";

import { useQuery } from "@apollo/client/react";
import { OptionsList } from "features/dropdown/ui/options-list/ui";

import Location from "./images/Location.svg";
import { DropdownContainer } from "../../dropdown-container";
import { LIST_COUNTRIES } from "../api";
import client from "../lib/apolloClient";
import { getLocationOptions, LocationDropdownContainerProps } from "../model";

export const LocationDropdownContainer: FC<LocationDropdownContainerProps> = ({
  onSelect,
  selectOption,
}) => {
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });
  const locationOptions = getLocationOptions(data) || [];

  return (
    <DropdownContainer
      icon={<Location />}
      title="Location"
      isFetching={loading || !!error}
      selectName={selectOption.name || locationOptions[0]?.name}
      content={
        <OptionsList
          options={locationOptions}
          selectValue={String(selectOption.value) || locationOptions[0]?.value}
          onSelect={onSelect}
        />
      }
    />
  );
};
