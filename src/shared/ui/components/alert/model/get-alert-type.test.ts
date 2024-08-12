import { getAlertType } from "./get-alert-type";

describe("getAlertType", () => {
  it("should return 'success' if isFetching is false and isError is false", () => {
    const alertType = getAlertType(false, false);
    expect(alertType).toBe("success");
  });

  it("should return 'error' if isFetching is true and isError is false", () => {
    const alertType = getAlertType(true, false);
    expect(alertType).toBe("error");
  });

  it("should return 'error' if isFetching is false and isError is true", () => {
    const alertType = getAlertType(false, true);
    expect(alertType).toBe("error");
  });

  it("should return 'error' if isFetching is true and isError is true", () => {
    const alertType = getAlertType(true, true);
    expect(alertType).toBe("error");
  });
});
