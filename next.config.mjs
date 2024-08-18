/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/shared/lib/i18n/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "plus.unsplash.com",
      "images.unsplash.com",
      "www.countryflags.com",
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: "@svgr/webpack",
    });
    return config;
  },
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV === "production",
  },
};

export default withNextIntl(nextConfig);
