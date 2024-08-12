import { render } from "@testing-library/react";

import { StarRating } from "./star-rating";

jest.mock("./images/star-full.svg", () => "svg");
jest.mock("./images/star-half.svg", () => "svg");

describe("StarRating", () => {
  it("renders 5 full stars for rating 5", () => {
    const { getAllByTestId } = render(<StarRating rating={5} />);

    const fullStars = getAllByTestId("full-start");
    expect(fullStars).toHaveLength(5);
  });

  it("renders 5 full stars for rating 4.8", () => {
    const { getAllByTestId } = render(<StarRating rating={5} />);

    const fullStars = getAllByTestId("full-start");
    expect(fullStars).toHaveLength(5);
  });

  it("renders 4 full stars and 1 half star for rating 4.5", () => {
    const { getByTestId, getAllByTestId } = render(<StarRating rating={4.5} />);
    const fullStars = getAllByTestId("full-start");
    expect(fullStars).toHaveLength(4);

    const halfStar = getByTestId("half-start");
    expect(halfStar).toBeDefined();
  });
});
