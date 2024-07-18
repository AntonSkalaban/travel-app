import createMiddleware from "next-intl/middleware";

import { locales } from "./shared/lib/i18n/i18n";
import { localePrefix } from "./shared/lib/i18n/navigation";

export default createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
});

export const config = {
  matcher: ["/", "/(ru|en)/:path*"],
};
