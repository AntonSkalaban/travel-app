import { Option } from "../../model/index";

export interface OptionsListProps {
  options: Option[];
  selectValue: string;
  onSelect: (option: Option) => void;
}
