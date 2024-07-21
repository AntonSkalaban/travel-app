import { useState } from "react";
import emailjs from "@emailjs/browser";

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const useSendEmail = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendData = async (
    data: { [key: string]: string },
    templateID: string | undefined,
  ) => {
    setIsFetching(true);
    if (!serviceID || !templateID || !publicKey) {
      return setIsError(true);
    }
    try {
      await emailjs.send(serviceID, templateID, data, {
        publicKey,
      });
    } catch (e) {
      setIsError(true);
    } finally {
      setIsFetching(false);
    }
  };

  return { isFetching, isError, sendData: sendData };
};
