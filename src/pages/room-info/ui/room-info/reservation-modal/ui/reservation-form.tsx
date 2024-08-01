import { ChangeEvent, FC, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

import { useSendDataEmail } from "shared/lib/email-js/api";
import { Locale } from "shared/lib/i18n";
import { useShowAlert } from "shared/ui/alert/model/use-show-alert";
import { Alert } from "shared/ui/alert/ui";
import { Modal } from "shared/ui/modal/ui/modal";
import { Input } from "widgets/form/input/ui";

import { getAlertMessage, getAlertType } from "../model/helpers";
import { defaultValues, formShema } from "../model/shema";
import { FormValues, ReservationModalProps } from "../model/types";
import styles from "./styles.module.scss";

export const ReservationModal: FC<ReservationModalProps> = ({
  roomId,
  roomName,
  onClose,
}) => {
  const t = useTranslations("home.modal");
  const localActive = useLocale() as Locale;

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(formShema),
    defaultValues,
    mode: "all",
  });

  const { isFetching, isError, sendData } = useSendDataEmail();

  const { isAlertOpen, showAlert } = useShowAlert();

  const alertType = getAlertType(isFetching, isError);

  const alertMessage = useMemo(
    () => getAlertMessage(alertType, localActive),
    [alertType, localActive],
  );

  const onSubmit = async (data: FormValues) => {
    await sendData(
      { ...data, roomId, roomName },
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_DATA_ID,
    );
    showAlert();
  };

  return (
    <>
      {isAlertOpen && <Alert type={alertType} message={alertMessage} />}
      <Modal close={onClose}>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="firstName"
              control={control}
              render={({ field, formState: { errors } }) => (
                <Input
                  {...field}
                  placeholder="First Name"
                  error={errors.firstName?.message}
                />
              )}
            />

            <Controller
              name="lastName"
              control={control}
              render={({ field, formState: { errors } }) => (
                <Input
                  {...field}
                  placeholder="Last Name"
                  error={errors.lastName?.message}
                />
              )}
            />

            <Controller
              name="phone"
              control={control}
              render={({ field, formState: { errors } }) => (
                <Input
                  {...field}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    field.onChange(e.target.value.replace(/[^+\d]/g, ""))
                  }
                  type="tel"
                  maxLength={11}
                  placeholder="Phone (80XXYYYYYYY)"
                  error={errors.phone?.message}
                />
              )}
            />
            <button className={styles.form__btn} disabled={isFetching}>
              {isFetching ? `${t("btn.fetching")}...` : t("btn.submit")}
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};
