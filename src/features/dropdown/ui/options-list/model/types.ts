export interface Option {
  name: string;
  value: number | string;
}

export interface OptionsListProps {
  options: Option[];
  selectValue: string;
  onSelect: (option: Option) => void;
}
