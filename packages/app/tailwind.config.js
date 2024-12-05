import { configTailwindExtention } from './TailwindCustomStyles';

const tailwindConfig = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  theme: configTailwindExtention,
  plugins: [require('@tailwindcss/typography')],
};

export default tailwindConfig;
