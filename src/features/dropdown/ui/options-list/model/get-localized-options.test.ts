import { getLocalizedOptions } from "./get-localized-options";

describe("getLocalizedOptions", () => {
  const testData = [
    {
      name: {
        en: "English name 1",
        ru: "Русское имя 1",
      },
      value: "option1",
    },
    {
      name: {
        en: "English name 2",
        ru: "Русское имя 2",
      },
      value: "option2",
    },
  ];

  it("should return localized options for English locale", () => {
    const localizedOptions = getLocalizedOptions(testData, "en");
    expect(localizedOptions).toEqual([
      { name: "English name 1", value: "option1" },
      { name: "English name 2", value: "option2" },
    ]);
  });

  it("should return localized options for Russian locale", () => {
    const localizedOptions = getLocalizedOptions(testData, "ru");
    expect(localizedOptions).toEqual([
      { name: "Русское имя 1", value: "option1" },
      { name: "Русское имя 2", value: "option2" },
    ]);
  });

  it("should handle empty data", () => {
    const localizedOptions = getLocalizedOptions([], "en");
    expect(localizedOptions).toEqual([]);
  });
});
