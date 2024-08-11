import { EmailErrorMessage, EmailSuccessMessage } from "./contants";
import { getAlertMessage } from "./get-alert-message";

describe("getAlertMessage", () => {
  it("should return correct error message for English locale", () => {
    const errorMessage = getAlertMessage("error", "en");
    expect(errorMessage).toBe(EmailErrorMessage.en);
  });

  it("should return correct error message for Russian locale", () => {
    const errorMessage = getAlertMessage("error", "ru");
    expect(errorMessage).toBe(EmailErrorMessage.ru);
  });

  it("should return correct success message for English locale", () => {
    const successMessage = getAlertMessage("success", "en");
    expect(successMessage).toBe(EmailSuccessMessage.en);
  });

  it("should return correct success message for Russian locale", () => {
    const successMessage = getAlertMessage("success", "ru");
    expect(successMessage).toBe(EmailSuccessMessage.ru);
  });
});
