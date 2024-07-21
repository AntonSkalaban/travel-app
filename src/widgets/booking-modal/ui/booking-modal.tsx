import { ChangeEvent, FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

import { useSendEmail } from "shared/lib/email-js/api/send-email";
import { Modal } from "shared/ui/modal/ui/modal";
import { Input } from "widgets/form/input/ui";

import { formShema } from "../model/shema";
import { BookingModalProps, FormValues } from "../model/types";
import styles from "./styles.module.scss";

export const BookingModal: FC<BookingModalProps> = ({
  person,
  location,
  room,
  onClose,
}) => {
  const t = useTranslations("home.modal");

  const { isSuccess, isFetching, isError, sendData } = useSendEmail();

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(formShema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
    },
    mode: "all",
  });

  const onSubmit = async (data: FormValues) => {
    sendData({ ...data, location, person, room }, "template_b5nyaj9");
  };

  return (
    <Modal close={onClose}>
      <div className={styles.container}>
        <h2>{t("title")}</h2>
        <p>
          {t("location")}: {location}
          <br />
          {t("person")}:{person}
          <br />
          {t("room")}: {room}
        </p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstName"
            control={control}
            render={({ field, formState: { errors } }) => (
              <Input
                {...field}
                placeholder="First Name"
                error={errors.firstName?.message}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            render={({ field, formState: { errors } }) => (
              <Input
                {...field}
                placeholder="Last Name"
                error={errors.lastName?.message}
              />
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({ field, formState: { errors } }) => (
              <Input
                {...field}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  field.onChange(e.target.value.replace(/[^+\d]/g, ""))
                }
                type="tel"
                maxLength={11}
                placeholder="Phone (80XXYYYYYYY)"
                error={errors.phone?.message}
              />
            )}
          />
          <button className={styles.form__btn} disabled={isFetching}>
            {isFetching ? `${t("btn.fetching")}...` : t("btn.submit")}
          </button>
        </form>
      </div>
    </Modal>
  );
};
