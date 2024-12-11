import { NextIntlClientProvider } from 'next-intl';
import React from 'react';
import es from '../../messages/es.json';

const withIntl = (Story) => (
  <NextIntlClientProvider
    locale="es"
    messages={es}
    // timeZone={'Europe/Copenhagen'}
  >
    <div>
      <Story />
    </div>
  </NextIntlClientProvider>
);

export default withIntl;
