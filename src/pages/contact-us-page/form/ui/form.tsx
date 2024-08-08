"use client";
import { FC, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocale } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

import { useSendDataEmail } from "shared/lib/email-js/api/use-send-data-email";
import { Locale } from "shared/lib/i18n";
import { getAlertMessage, getAlertType } from "shared/ui/alert/model";
import { useShowAlert } from "shared/ui/alert/model/use-show-alert";
import { Alert } from "shared/ui/alert/ui";
import { Wrapper } from "shared/ui/wrapper";

import { InputContainer } from "./input-container/ui/input-container";
import { defaultValues, formShema } from "../model/shema";
import { FormValues } from "../model/types";
import styles from "./styles.module.scss";

export const FormSection: FC = () => {
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
                    <input {...field} className={styles.form__input} />
                  </InputContainer>
                )}
              />

              <Controller
                name="email"
                control={control}
                render={({ field, formState: { errors } }) => (
                  <InputContainer name="Email" error={errors.email?.message}>
                    <input {...field} className={styles.form__input} />
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
                    className={`${styles.form__input} ${styles.form__textarea}`}
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
