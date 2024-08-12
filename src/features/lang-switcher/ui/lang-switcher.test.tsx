import { fireEvent, render } from "@testing-library/react";

import { LangSwitcher } from "./lang-switcher";

jest.mock("./images/flag-em.svg", () => "svg");
jest.mock("./images/flag-ru.svg", () => "svg");

jest.mock("next/navigation", () => ({
  useRouter: () => ({ replace: () => ({}) }),
  usePathname: () => ({ replace: () => ({}) }),
}));

jest.mock("next-intl", () => ({
  useLocale: () => "en",
}));

describe("LangSwitcher", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the language switcher with the English flag", () => {
    const { getByTestId } = render(<LangSwitcher />);

    const buttonElement = getByTestId("toggle-btn");
    const flagEn = getByTestId("flag-en");

    expect(buttonElement).toBeDefined();
    expect(flagEn).toBeDefined();
  });

  it("switches flag to Russian on click", () => {
    const { getByTestId, queryByTestId } = render(<LangSwitcher />);
    const buttonElement = getByTestId("toggle-btn");
    const flagRu = queryByTestId("flag-ru");

    expect(flagRu).toBeNull();

    fireEvent.click(buttonElement);

    expect(flagRu).toBeDefined();
  });
});
