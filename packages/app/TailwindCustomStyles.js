export const configTailwindExtention = {
  extend: {
    screens: {
      mobile: '361px',
      // => @media (min-width: 360px) { ... }

      mobilepp: '376px',
      // => @media (min-width: 375px) { ... }

      desktopLg: '1921px',
      // => @media (min-width: 1920px) { ... }
    },
    colors: {
      primary: {
        lavander: {
          DEFAULT: 'rgba(var(--color-lavander-500), <alpha-value> )',
          100: 'rgba(var(--color-lavander-100), <alpha-value> )',
          200: 'rgba(var(--color-lavander-200), <alpha-value> )',
          300: 'rgba(var(--color-lavander-300), <alpha-value> )',
          400: 'rgba(var(--color-lavander-400), <alpha-value> )',
          500: 'rgba(var(--color-lavander-500), <alpha-value> )',
          600: 'rgba(var(--color-lavander-600), <alpha-value> )',
          700: 'rgba(var(--color-lavander-700), <alpha-value> )',
          800: 'rgba(var(--color-lavander-800), <alpha-value> )',
          900: 'rgba(var(--color-lavander-900), <alpha-value> )',
        },
        violet: {
          DEFAULT: 'rgba(var(--color-violet-500), <alpha-value> )',
          100: 'rgba(var(--color-violet-100), <alpha-value> )',
          200: 'rgba(var(--color-violet-200), <alpha-value> )',
          300: 'rgba(var(--color-violet-300), <alpha-value> )',
          400: 'rgba(var(--color-violet-400), <alpha-value> )',
          500: 'rgba(var(--color-violet-500), <alpha-value> )',
          600: 'rgba(var(--color-violet-600), <alpha-value> )',
          700: 'rgba(var(--color-violet-700), <alpha-value> )',
          800: 'rgba(var(--color-violet-800), <alpha-value> )',
          900: 'rgba(var(--color-violet-900), <alpha-value> )',
        },
      },
      secondary: {
        DEFAULT: 'rgba(var(--color-secondary-500), <alpha-value> )',
        100: 'rgba(var(--color-secondary-100), <alpha-value> )',
        200: 'rgba(var(--color-secondary-200), <alpha-value> )',
        300: 'rgba(var(--color-secondary-300), <alpha-value> )',
        400: 'rgba(var(--color-secondary-400), <alpha-value> )',
        500: 'rgba(var(--color-secondary-500), <alpha-value> )',
        600: 'rgba(var(--color-secondary-600), <alpha-value> )',
        700: 'rgba(var(--color-secondary-700), <alpha-value> )',
        800: 'rgba(var(--color-secondary-800), <alpha-value> )',
        900: 'rgba(var(--color-secondary-900), <alpha-value> )',
      },
      invalid: {
        DEFAULT: 'rgba(var(--color-error-light), <alpha-value> )',
        light: 'rgba(var(--color-error-light), <alpha-value> )',
        dark: 'rgba(var(--color-error-dark), <alpha-value> )',
      },
      success: {
        DEFAULT: 'rgba(var(--color-success-light), <alpha-value> )',
        light: 'rgba(var(--color-success-light), <alpha-value> )',
        dark: 'rgba(var(--color-success-dark), <alpha-value> )',
      },
    },
  },
};
