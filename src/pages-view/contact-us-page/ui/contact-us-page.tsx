"use client";
import { FC } from "react";

import { Wrapper } from "shared/ui";

import { ContactUsForm } from "./contact-us-form";
import { ContactUsHeader } from "./contact-us-header";
import { ContactUsMap } from "./contact-us-map";

export const ContactUsPage: FC = () => {
  return (
    <>
      <ContactUsHeader />
      <Wrapper>
        <ContactUsForm />
      </Wrapper>
      <ContactUsMap />
    </>
  );
};
