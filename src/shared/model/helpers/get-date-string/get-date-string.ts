export const getDateString = (date: Date, locale: string = "en-US") => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return new Intl.DateTimeFormat(locale, options).format(date);
};
