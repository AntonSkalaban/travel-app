import { FC, useMemo } from "react";
import { useLocale } from "next-intl";

import { Locale, useSendDataEmail } from "shared/lib";
import { Alert, getAlertMessage, getAlertType, useShowAlert } from "shared/ui";

import { EmailFormProps } from "../model";

export const withEmailForm =
  (Component: FC<EmailFormProps>) =>
  (props: { formData?: { [key: string]: string } }) => {
    const localActive = useLocale() as Locale;

    const { isFetching, isError, sendData } = useSendDataEmail();

    const { isAlertOpen, showAlert } = useShowAlert();

    const alertType = getAlertType(isFetching, isError);

    const alertMessage = useMemo(
      () => getAlertMessage(alertType, localActive),
      [alertType, localActive],
    );

    return (
      <>
        {isAlertOpen && <Alert type={alertType} message={alertMessage} />}
        <Component
          {...props}
          isFetching={isFetching}
          sendData={sendData}
          showAlert={showAlert}
          isBtnDisabled={isFetching || isAlertOpen}
        />
      </>
    );
  };
