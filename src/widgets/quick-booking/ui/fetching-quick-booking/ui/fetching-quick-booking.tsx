"use client";

import { FC } from "react";
import { useLocale } from "next-intl";

import { useQuery } from "@apollo/client";
import { client } from "shared/api";
import { Locale } from "shared/lib";

import { QuickBookingSkeleton } from "../../quick-booking-skeleton";
import { QuickBooking } from "../../quick-bookung";
import { LIST_COUNTRIES } from "../api";
import { CountryResponce, getLocationOptions } from "../model";

export const FetchingQuickBooking: FC = () => {
  const {
    data: countries,
    loading,
    error,
  } = useQuery<CountryResponce>(LIST_COUNTRIES, { client });
  const localActive = useLocale() as Locale;

  if (loading || error) return <QuickBookingSkeleton />;

  const locationOptions = getLocationOptions(
    countries?.countries || [],
    localActive,
  );

  return <QuickBooking locationOptions={locationOptions} />;
};
