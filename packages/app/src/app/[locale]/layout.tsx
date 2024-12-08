import { Appbar } from '@/components/molecules';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../globals.css';

// const inter = localFont({
//   src: '../fonts/inter.woff',
//   variable: '--font-inter-sans',
//   weight: '100 900',
// });
// ;

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as never)) {
    console.log('not locale');
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full min-h-screen w-screen">
      <body
        className={`font-sans antialiased bg-gradient-body text-white h-full w-full`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col h-full">
            <Appbar className="flex-none" />
            <div className="flex flex-grow">{children}</div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
