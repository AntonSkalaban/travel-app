export interface Option {
  name: string;
  value: number | string;
}

export interface MultiLanguageOption {
  name: { ru: string; en: string };
  value: number | string;
}
