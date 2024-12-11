import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as never)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (
      await (locale === 'es'
        ? // When using Turbopack, this will enable HMR for `en`
          import('../../messages/es.json')
        : import(`../../messages/${locale}.json`))
    ).default,
    // messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
