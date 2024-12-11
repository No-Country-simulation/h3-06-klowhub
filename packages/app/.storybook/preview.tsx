import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import withIntl from './decorators/withIntl';

// if (typeof global.process === 'undefined') {
//   const worker = setupWorker(
//     http.get('http://localhost:3000/auth/login', () =>
//       HttpResponse.json({
//         user: { id: '1', userName: 'test', role: 'admin' },
//         accessToken: 'accessToken',
//         refreshToken: 'refreshToken',
//       }),
//     ),
//   );
//   worker.start();
// }

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
