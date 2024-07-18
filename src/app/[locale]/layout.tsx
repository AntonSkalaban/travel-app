import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Header } from "widgets/header/ui";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
