import { FC } from "react";
import { Control, useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

import { Locale } from "shared/lib";
import { TextInput, withEmailForm } from "shared/ui";

import { FormValues, getFormShema, templateId } from "../model";
import styles from "./styles.module.scss";

interface SubscribeProps {
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
export const Subscribe: FC<SubscribeProps> = ({
  isFetching,
  sendData,
  showAlert,
  isBtnDisabled,
}) => {
  const t = useTranslations("subscribeForm");
  const locale = useLocale() as Locale;

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(getFormShema(locale)),
    defaultValues: { email: "" },
    mode: "all",
  });

  const onSubmit = async (data: FormValues) => {
    await sendData({ ...data }, templateId);
    showAlert();
  };

  return (
    <form
      className={styles.subscribe}
      onSubmit={handleSubmit(onSubmit)}
      data-testid="subscribe-form"
    >
      <TextInput
        placeholder={`${t("placeHolder")}`}
        name="email"
        control={control as unknown as Control<{ [key: string]: string }>}
      />
      <button className={styles.subscribe__btn} disabled={isBtnDisabled}>
        {isFetching ? t("btn.fetching") : t("btn.default")}
      </button>
    </form>
  );
};

export const SubscribeForm = withEmailForm(Subscribe);
