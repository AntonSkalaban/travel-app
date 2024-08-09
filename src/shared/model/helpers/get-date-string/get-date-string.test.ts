import { getDateString } from "./get-date-string";

describe("getDateString", () => {
  it("should return a formatted date string for ru-RU locale", () => {
    const date = new Date("2023-12-25");
    const expectedString = "25 дек. 2023 г.";
    expect(getDateString(date, "ru-RU")).toBe(expectedString);
  });

  it("should return a formatted date string for en-US locale by default", () => {
    const date = new Date("2023-12-25");
    const expectedString = "Dec 25, 2023";
    expect(getDateString(date)).toBe(expectedString);
  });
});
