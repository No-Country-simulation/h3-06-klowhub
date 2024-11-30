import type { Preview } from '@storybook/react';
// import * as NextImage from 'next/image';
// import React from 'react';
import '../src/app/globals.css';
import withIntl from './decorators/withIntl';

// // Include Images in Storybook
// const OriginalNextImage = NextImage.default;

// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props) => <OriginalNextImage {...props} unoptimized />,
// });

const preview: Preview = {
  decorators: [withIntl],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#10162F',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'gray',
          value: '#888888',
        },
      ],
    },
  },
};

export default preview;
