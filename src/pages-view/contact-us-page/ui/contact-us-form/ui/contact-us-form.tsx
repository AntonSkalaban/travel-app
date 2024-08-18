import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

import { withEmailForm } from "shared/ui";

import { defaultValues, formShema, FormValues, templateId } from "../model";
import { InputContainer } from "./input-container";
import styles from "./styles.module.scss";

export interface FormProps {
  isFetching: boolean;
  sendData: (
    data: {
      [key: string]: string;
    },
    templateID: string | undefined,
  ) => Promise<void>;
  showAlert: () => void;
  isBtnDisabled: boolean;
}

export const Form: FC<FormProps> = ({
  isFetching,
  sendData,
  showAlert,
  isBtnDisabled,
}) => {
  const t = useTranslations("contactUs.form");

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(formShema),
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
                <input {...field} type="text" className={styles.form__input} />
              </InputContainer>
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field, formState: { errors } }) => (
              <InputContainer name={t("email")} error={errors.email?.message}>
                <input {...field} type="email" className={styles.form__input} />
              </InputContainer>
            )}
          />
        </div>

        <Controller
          name="message"
          control={control}
          render={({ field, formState: { errors } }) => (
            <InputContainer name={t("message")} error={errors.message?.message}>
              <textarea
                {...field}
                className={`${styles.form__input} ${styles.form__textarea}`}
              />
            </InputContainer>
          )}
        />

        <button className={styles.form__btn} disabled={isBtnDisabled}>
          {t(`btn.${isFetching ? "fetching" : "active"}`)}
        </button>
      </form>
    </section>
  );
};

export const ContactUsForm = withEmailForm(Form);
