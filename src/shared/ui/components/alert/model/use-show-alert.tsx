"use clienta";
import { useState } from "react";

export const useShowAlert = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const showAlert = () => {
    setIsAlertOpen(true);
    setTimeout(() => setIsAlertOpen(false), 3000);
  };

  return { isAlertOpen, showAlert };
};
