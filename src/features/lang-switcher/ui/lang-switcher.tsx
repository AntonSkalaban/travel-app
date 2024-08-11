"use client";

import { FC } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

import { Locale } from "shared/lib/i18n";

import FlagEn from "./images/flag-en.svg";
import FlagRu from "./images/flag-ru.svg";
import styles from "./styles.module.scss";

export const LangSwitcher: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale() as Locale;

  const handleLangClick = () => {
    const newLanguage = localActive === "en" ? "ru" : "en";
    if (!pathname) return;
    router.replace(pathname.replace(localActive, newLanguage));
  };

  return (
    <button
      className={styles.button}
      onClick={handleLangClick}
      data-testid="toggle-btn"
    >
      {localActive === "en" ? (
        <FlagEn data-testid="flag-en" />
      ) : (
        <FlagRu data-testid="flag-ru" />
      )}
    </button>
  );
};
