import { configTailwindExtention } from './TailwindCustomStyles';

const tailwindConfig = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  theme: configTailwindExtention,
  plugins: [],
};

export default tailwindConfig;
