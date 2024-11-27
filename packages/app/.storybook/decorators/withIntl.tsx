import { NextIntlClientProvider } from 'next-intl';
import defaultMessages from '../../messages/es.json';
import React from 'react';

const withIntl = (Story) => (
  <NextIntlClientProvider
    locale="es"
    messages={defaultMessages}
    // ... potentially other config
  >
    <Story />
  </NextIntlClientProvider>
);

export default withIntl;
