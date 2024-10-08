import { FC } from "react";
import { Control, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

import { PhoneInput, TextInput, withEmailForm } from "shared/ui";

import {
  defaultValues,
  FormProps,
  formShema,
  FormValues,
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

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(formShema),
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
      />
      <TextInput
        name="lastName"
        control={control as unknown as Control<{ [key: string]: string }>}
      />
      <PhoneInput
        control={control as unknown as Control<{ [key: string]: string }>}
      />

      <button
        className={styles.form__btn}
        disabled={isBtnDisabled}
        aria-label="send form button"
      >
        {isFetching ? `${t("btn.fetching")}...` : t("btn.submit")}
      </button>
    </form>
  );
};

export const ReservationFrom = withEmailForm(Form);
