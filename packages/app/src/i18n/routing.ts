import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { PATHNAMES } from './config/pathnames';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from './config/supportedLang';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: SUPPORTED_LOCALES,
  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,
  // Used when a locale is detected
  localeDetection: true,
  // A list of routes and traductions
  pathnames: PATHNAMES,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
