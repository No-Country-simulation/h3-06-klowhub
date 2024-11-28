import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { getTranslations } from 'next-intl/server';
import '../globals.css';
import AppBar from '@/components/molecules/Appbar/Appbar';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

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
    <html lang={locale} className="h-screen w-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-body text-white h-full w-full`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col w-full h-full">
            <AppBar className="flex-shrink-0 flex-grow-0" />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
