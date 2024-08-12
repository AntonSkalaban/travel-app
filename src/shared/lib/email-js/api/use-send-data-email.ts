"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import { publicKey, serviceID } from "../model";

export const useSendDataEmail = () => {
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
