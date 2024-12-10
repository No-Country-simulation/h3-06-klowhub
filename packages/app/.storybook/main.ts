import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const getAbsolutePath = (packageName: string): any =>
  path.dirname(require.resolve(path.join(packageName, 'package.json')));

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/theming'),
    getAbsolutePath('@storybook/manager-api'),
    getAbsolutePath('@storybook/addon-styling-webpack'),
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  features: {
    experimentalRSC: true,
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },

  webpackFinal: async (config, { configType }) => {
    config.resolve ||= {};
    config.resolve.alias ||= {};

    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];
    config.resolve.alias = {
      ...config.resolve.alias,

      // Allows for importing stuff like mocks from the .storybook folder.
      // @see https://github.com/storybookjs/storybook/issues/11639#issuecomment-690834754
      '.storybook': path.resolve(__dirname, './'),

      // `getTranslations` doesn't work in Storybook, so we mock it.
      // @see https://github.com/amannn/next-intl/discussions/771#discussioncomment-9587798
      'next-intl/server': path.resolve(
        __dirname,
        './__mock__/next-intl-server.ts',
      ),
      getSession: path.resolve(__dirname, './__mock__/session.mock.ts'),
    };

    return config;
  },
};

export default config;
