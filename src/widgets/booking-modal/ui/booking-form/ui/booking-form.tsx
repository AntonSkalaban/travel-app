import { FC } from "react";
import { Control, useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

import { Locale } from "shared/lib";
import { PhoneInput, TextInput, withEmailForm } from "shared/ui";

import {
  defaultValues,
  FormProps,
  FormValues,
  getFormShema,
  templateId,
} from "../model";
import styles from "./styles.module.scss";

export const Form: FC<FormProps> = ({
  isFetching,
  sendData,
  showAlert,
  formData,
  isBtnDisabled,
}) => {
  const t = useTranslations("home.modal");
  const locale = useLocale() as Locale;
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(getFormShema(locale)),
    defaultValues,
    mode: "all",
  });

  const onSubmit = async (data: FormValues) => {
    await sendData({ ...data, ...formData }, templateId);
    showAlert();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        name="firstName"
        control={control as unknown as Control<{ [key: string]: string }>}
        placeholder="First Name"
      />
      <TextInput
        name="lastName"
        control={control as unknown as Control<{ [key: string]: string }>}
        placeholder="Last Name"
      />
      <PhoneInput
        control={control as unknown as Control<{ [key: string]: string }>}
      />

      <button
        className={styles.form__btn}
        disabled={isBtnDisabled}
        aria-label="form button"
      >
        {isFetching ? `${t("btn.fetching")}...` : t("btn.submit")}
      </button>
    </form>
  );
};

export const BookingForm = withEmailForm(Form);
