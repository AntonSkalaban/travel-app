import { Option } from "features/dropdown/ui/options-list/model";

export const personOptions: Option[] = [
  { name: "01", value: 1 },
  { name: "02", value: 2 },
  { name: "03", value: 3 },
  { name: "04", value: 4 },
  { name: "05", value: 5 },
  { name: "06", value: 6 },
  { name: "07", value: 7 },
];

export const roomOptions: { [key: string]: Option[] } = {
  ru: [
    { name: "стандарт", value: "standart" },
    { name: "королевский", value: "roal" },
  ],
  en: [
    { name: "standart", value: "standart" },
    { name: "roal", value: "roal" },
  ],
};
