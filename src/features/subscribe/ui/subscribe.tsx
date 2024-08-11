"use client";

import { FC, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

import { Locale, useSendDataEmail } from "shared/lib";
import {
  Alert,
  getAlertMessage,
  getAlertType,
  Input,
  useShowAlert,
} from "shared/ui";

import { formShema, FormValues } from "../model";
import styles from "./styles.module.scss";

export const Subscribe: FC = () => {
  const t = useTranslations("subscribeForm");
  const localActive = useLocale() as Locale;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formShema),
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
      { ...data },
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_FORM_ID,
    );
    showAlert();
  };

  return (
    <>
      {" "}
      {isAlertOpen && <Alert type={alertType} message={alertMessage} />}
      <form
        className={styles.subscribe}
        onSubmit={handleSubmit(onSubmit)}
        data-testid="subscribe-form"
      >
        <Input
          placeholder={`${t("placeHolder")}`}
          {...register("email")}
          error={errors.email?.message}
        />
        <button className={styles.subscribe__btn} disabled={isFetching}>
          {isFetching ? t("btn.fetching") : t("btn.default")}
        </button>
      </form>
    </>
  );
};
