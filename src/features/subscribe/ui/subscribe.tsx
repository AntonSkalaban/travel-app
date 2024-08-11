"use client";

import { FC, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

import { useSendDataEmail } from "shared/lib/email-js/api";
import { Locale } from "shared/lib/i18n";
import { useShowAlert } from "shared/ui/components/alert/model/use-show-alert";
import { Alert } from "shared/ui/components/alert/ui";
import { Input } from "shared/ui/components/input/ui";

import { formShema, FormValues, getAlertMessage } from "../model";
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

  const alertType = !isFetching && !isError ? "success" : "error";

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
      <form className={styles.subscribe} onSubmit={handleSubmit(onSubmit)}>
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
