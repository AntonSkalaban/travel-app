import { fireEvent, render } from "@testing-library/react";

import { ElasticSearch } from "./elastic-search";

jest.mock("@apollo/client");
jest.mock("./images/Search.svg", () => "svg");
jest.mock("./images/Close.svg", () => "svg");

jest.mock("next/navigation", () => ({
  useRouter: () => ({ replace: () => ({}) }),
  usePathname: () => ({}),
}));

jest.mock("./suggestions/model/use-elastic-search", () => ({
  useElasticSearch: () => ({
    loading: false,
    data: { toursCountries: [{ country: "Belarus" }] },
  }),
}));

describe("ElasticSearch", () => {
  it("renders the search bar with initial value", () => {
    const { getByTestId } = render(<ElasticSearch initialValue="test" />);

    const inputElement = getByTestId("search-input") as HTMLInputElement;
    expect(inputElement.value).toBe("test");
  });

  it("updates the search value on input change", () => {
    const { getByTestId } = render(<ElasticSearch initialValue="test" />);

    const inputElement = getByTestId("search-input") as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: "belarus" } });

    expect(inputElement.value).toBe("belarus");
  });

  it("should show clear button when value input", () => {
    const { getByTestId, queryByTestId } = render(
      <ElasticSearch initialValue="" />,
    );

    const inputElement = getByTestId("search-input") as HTMLInputElement;
    const clearBtn = queryByTestId("clear-btn");

    expect(clearBtn).toBeNull();
    fireEvent.change(inputElement, { target: { value: "bel" } });

    expect(clearBtn).toBeDefined();
  });

  it("clears the search value on close button click", () => {
    const { getByTestId } = render(<ElasticSearch initialValue="belarus" />);

    const inputElement = getByTestId("search-input") as HTMLInputElement;
    const clearBtn = getByTestId("clear-btn");

    fireEvent.click(clearBtn);

    expect(inputElement.value).toBe("");
  });

  it("shows suggestions when input value changes", () => {
    const { getByTestId, queryByTestId } = render(
      <ElasticSearch initialValue="" />,
    );
    const inputElement = getByTestId("search-input") as HTMLInputElement;
    const suggestionsList = queryByTestId("suggestions-list");

    expect(suggestionsList).toBeNull();

    fireEvent.change(inputElement, { target: { value: "bel" } });

    expect(suggestionsList).toBeDefined();
  });
});
