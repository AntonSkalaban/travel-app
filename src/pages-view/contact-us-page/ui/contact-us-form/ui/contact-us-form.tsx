import { FC } from "react";
import { Control, useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

import { Locale } from "shared/lib";
import { withEmailForm } from "shared/ui";

import {
  defaultValues,
  FormProps,
  FormValues,
  getFormShema,
  templateId,
} from "../model";
import { FormInput, FormTextaria } from "./form-inputs";
import styles from "./styles.module.scss";

export const Form: FC<FormProps> = ({
  isFetching,
  sendData,
  showAlert,
  isBtnDisabled,
}) => {
  const t = useTranslations("contactUs.form");
  const locale = useLocale() as Locale;

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(getFormShema(locale)),
    defaultValues,
    mode: "all",
  });

  const onSubmit = async (data: FormValues) => {
    await sendData({ ...data }, templateId);
    showAlert();
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.section__title}>{t("title")}</h2>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        data-testid="contact-us-form"
      >
        <div className={styles.form__row}>
          <FormInput
            name="fullName"
            title={t("fullName")}
            control={control as unknown as Control<{ [key: string]: string }>}
            data-testid="fullName-input"
          />

          <FormInput
            name={"email"}
            title={t("email")}
            type="email"
            control={control as unknown as Control<{ [key: string]: string }>}
            data-testid="email-input"
          />
        </div>

        <FormTextaria
          name={"message"}
          title={t("message")}
          control={control as unknown as Control<{ [key: string]: string }>}
          data-testid="message-input"
        />

        <button
          className={styles.form__btn}
          disabled={isBtnDisabled}
          aria-label="send form button"
          data-testid="contact-us-btn"
        >
          {t(`btn.${isFetching ? "fetching" : "active"}`)}
        </button>
      </form>
    </section>
  );
};

export const ContactUsForm = withEmailForm(Form);
