"use client";
import { FC, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

import { Locale, useSendDataEmail } from "shared/lib";
import {
  Alert,
  getAlertMessage,
  getAlertType,
  useShowAlert,
  Wrapper,
} from "shared/ui";

import { defaultValues, formShema, FormValues } from "../model";
import { InputContainer } from "./input-container";
import styles from "./styles.module.scss";

export const ContactUsForm: FC = () => {
  const t = useTranslations("contactUs.form");

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
                    name={t("fullName")}
                    error={errors.fullName?.message}
                  >
                    <input
                      {...field}
                      type="text"
                      className={styles.form__input}
                    />
                  </InputContainer>
                )}
              />

              <Controller
                name="email"
                control={control}
                render={({ field, formState: { errors } }) => (
                  <InputContainer
                    name={t("email")}
                    error={errors.email?.message}
                  >
                    <input
                      {...field}
                      type="email"
                      className={styles.form__input}
                    />
                  </InputContainer>
                )}
              />
            </div>

            <Controller
              name="message"
              control={control}
              render={({ field, formState: { errors } }) => (
                <InputContainer
                  name={t("message")}
                  error={errors.message?.message}
                >
                  <textarea
                    {...field}
                    className={`${styles.form__input} ${styles.form__textarea}`}
                  />
                </InputContainer>
              )}
            />

            <button className={styles.form__btn} disabled={isFetching}>
              {t(`btn.${isFetching ? "fetching" : "active"}`)}
            </button>
          </form>
        </section>
      </Wrapper>
    </>
  );
};
