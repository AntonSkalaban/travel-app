import { createIndexedArray } from "./create-indexed-array";

describe("createIndexedArray", () => {
  it("should contain numbers from 0 to length - 1", () => {
    const length = 5;
    const result = createIndexedArray(length);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });

  it("should handle length 0", () => {
    const length = 0;
    const result = createIndexedArray(length);
    expect(result).toEqual([]);
  });

  it("should handle length 1", () => {
    const length = 1;
    const result = createIndexedArray(length);
    expect(result).toEqual([0]);
  });
});
