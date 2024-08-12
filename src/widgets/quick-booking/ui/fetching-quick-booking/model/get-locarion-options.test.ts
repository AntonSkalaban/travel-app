import { getLocationOptions } from "./get-location-options";

describe("getLocationOptions", () => {
  const testData = [
    {
      en: "United States",
      ru: "Соединенные Штаты Америки",
      __typename: "country",
    },
    {
      en: "Canada",
      ru: "Канада",
      __typename: "country",
    },
  ];

  it("should return localized options for English locale", () => {
    const localizedOptions = getLocationOptions(testData, "en");
    expect(localizedOptions).toEqual([
      { name: "United States", value: "United States" },
      { name: "Canada", value: "Canada" },
    ]);
  });

  it("should return localized options for Russian locale", () => {
    const localizedOptions = getLocationOptions(testData, "ru");
    expect(localizedOptions).toEqual([
      { name: "Соединенные Штаты Америки", value: "United States" },
      { name: "Канада", value: "Canada" },
    ]);
  });

  it("should handle empty data", () => {
    const localizedOptions = getLocationOptions([], "en");
    expect(localizedOptions).toEqual([]);
  });
});
