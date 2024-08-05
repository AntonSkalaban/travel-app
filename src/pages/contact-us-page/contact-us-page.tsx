"use client";
import { FC, ReactNode, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocale } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

import { useSendDataEmail } from "shared/lib/email-js/api/use-send-data-email";
import { Locale } from "shared/lib/i18n";
import { useShowAlert } from "shared/ui/alert/model/use-show-alert";
import { Alert } from "shared/ui/alert/ui";
import { Wrapper } from "shared/ui/wrapper";
import { getAlertMessage } from "features/subscribe/model";

import { defaultValues, formShema } from "./shema";
import { FormValues } from "./types";
import styles from "./styles.module.scss";

const getAlertType = (isFetching: boolean, isError: boolean) => {
  return !isFetching && !isError ? "success" : "error";
};

interface InputContainerProps {
  name: string;
  error?: string;
  children: ReactNode;
}
export const InputContainer: FC<InputContainerProps> = ({
  name,
  children,
  error,
}) => {
  return (
    <div className={styles["input-wrapper"]}>
      <p className={styles.input__name}>{name}</p>
      {children}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export const ContactUsPage: FC = () => {
  const localActive = useLocale() as Locale;

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(formShema),
    defaultValues,
    mode: "all",
  });

  const { isAlertOpen, showAlert } = useShowAlert();

  const { isFetching, isError, sendData } = useSendDataEmail();

  const alertType = getAlertType(isFetching, isError);

  const alertMessage = useMemo(
    () => getAlertMessage(alertType, localActive),
    [alertType, localActive],
  );

  const onSubmit = async (data: FormValues) => {
    await sendData(
      { ...data },
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_DATA_ID,
    );
    showAlert();
  };

  return (
    <>
      {" "}
      {isAlertOpen && <Alert type={alertType} message={alertMessage} />}
      <Wrapper>
        <section>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form__row}>
              <Controller
                name="fullName"
                control={control}
                render={({ field, formState: { errors } }) => (
                  <InputContainer
                    name="Fullname"
                    error={errors.fullName?.message}
                  >
                    <input {...field} className={styles.input} />
                  </InputContainer>
                )}
              />

              <Controller
                name="email"
                control={control}
                render={({ field, formState: { errors } }) => (
                  <InputContainer name="Email" error={errors.email?.message}>
                    <input {...field} className={styles.input} />
                  </InputContainer>
                )}
              />
            </div>

            <Controller
              name="message"
              control={control}
              render={({ field, formState: { errors } }) => (
                <InputContainer name="Message" error={errors.message?.message}>
                  <textarea
                    {...field}
                    className={`${styles.input} ${styles.textarea}`}
                  />
                </InputContainer>
              )}
            />

            <button className={styles.form__btn}>Send Message</button>
          </form>
        </section>
      </Wrapper>
    </>
  );
};
