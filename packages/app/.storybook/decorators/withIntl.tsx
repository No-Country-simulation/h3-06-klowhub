import { NextIntlClientProvider } from 'next-intl';
import React from 'react';
import defaultMessages from '../../messages/es.json';

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
