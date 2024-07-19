import { Option } from "features/dropdown/ui/options-list/model";

export interface LocationDropdownContainerProps {
  onSelect: (option: Option) => void;
  selectOption: Option;
}

export interface CountryData {
  __typename: string;
  name: string;
}

export interface CountryResponce {
  countries: CountryData[];
}
