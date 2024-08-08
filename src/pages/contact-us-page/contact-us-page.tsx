import { FC } from "react";

import { Wrapper } from "shared/ui/wrapper";

import ContactUsForm from "./contact-us-form/ui";
import ContactUsHeader from "./contact-us-header/ui";
import ContactUsMap from "./contact-us-map/ui/contact-us-map";

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
