import { highlightSustrting } from "./hightlight-substring";

describe("highlightSustrting", () => {
  const hihtlightClassName = "testClassNeame";

  it("should highlight substring in content", () => {
    const content = "Belarus";
    const subString = "be";
    const expectedResult = "<span class=testClassNeame>Be</span>larus";

    const result = highlightSustrting(content, subString, hihtlightClassName);

    expect(result).toEqual(expectedResult);
  });

  it("should handle multiple occurrences of the substring", () => {
    const content = "Alaska";
    const subString = "a";
    const expectedResult =
      "<span class=testClassNeame>A</span>l<span class=testClassNeame>a</span>sk<span class=testClassNeame>a</span>";

    const result = highlightSustrting(content, subString, hihtlightClassName);

    expect(result).toEqual(expectedResult);
  });

  it("should handle empty content", () => {
    const content = "";
    const subString = "test";
    const expectedResult = "";

    const result = highlightSustrting(content, subString, hihtlightClassName);

    expect(result).toEqual(expectedResult);
  });
});
