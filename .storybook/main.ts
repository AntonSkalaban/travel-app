import { StorybookConfig } from '@storybook/nextjs';
const path = require('path');
 

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ['storybook-next-intl'],
  webpackFinal: async (config) => {

    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
  
    // This modifies the existing image rule to exclude .svg files
    // since you want to handle those files with @svgr/webpack
    const imageRule = config.module.rules.find((rule) => rule?.['test']?.test('.svg'));
    if (imageRule) {
      imageRule['exclude'] = /\.svg$/;
    }
  
    // Configure .svg files to be loaded with @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
  

    if(config?.resolve?.alias) {
      config.resolve.alias['features'] = path.resolve(__dirname, '../src/features');
      config.resolve.alias['widgets'] = path.resolve(__dirname, '../src/widgets');
      config.resolve.alias['shared'] = path.resolve(__dirname, '../src/shared');
  }
    return config;
  },

  staticDirs: [
    {
      from: '../src/shared/ui/fonts',
      to: 'src/shared/ui/fonts',
    },
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  docs: {
    autodocs: "tag",
  },
};
export default config;