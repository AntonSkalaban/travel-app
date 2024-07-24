import { ReactNode } from "react";

import "./reset.scss";
import "./global.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
