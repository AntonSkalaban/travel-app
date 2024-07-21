"use client";

import { FC } from "react";

import { useQuery } from "@apollo/client";

import { QuickBooking } from "../../quick-booking";
import { QuickBookingSkeleton } from "../../quick-booking-skeleton";
import { LIST_COUNTRIES } from "../api";
import client from "../lib/apolloClient";
import { getLocationOptions } from "../model";

export const FetchingQuickBooking: FC = () => {
  const {
    data: countries,
    loading,
    error,
  } = useQuery(LIST_COUNTRIES, { client });

  if (loading || error) return <QuickBookingSkeleton />;

  const locationOptions = getLocationOptions(countries);

  return <QuickBooking locationOptions={locationOptions} />;
};
