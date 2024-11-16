import { create } from '@storybook/theming';

export const klowhubTheme = create({
  base: 'dark',
  // Typography
  fontBase: '"Lato", "Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Klowhub',
  brandUrl: '',
  brandImage: '',
  brandTarget: '_self',

  //
  colorPrimary: '#0066FF',
  colorSecondary: '#4eccc6',

  // UI
  appBg: '#01193D',
  appContentBg: '#01193D',
  appBorderColor: '#ffffff',
  appBorderRadius: 4,

  // Text colors
  textColor: '#ffffff',
  textInverseColor: '#000000',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#585C6D',
  barBg: '#01193D',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#401694',
  inputBorderRadius: 15,
});
