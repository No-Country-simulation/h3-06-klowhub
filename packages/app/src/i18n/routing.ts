import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es', 'fr'],

  // Used when no locale matches
  defaultLocale: 'es',

  // Used when a locale is detected
  localeDetection: true,

  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      es: '/sobre-nosotros',
      fr: '/a-propos',
    },
<<<<<<< Updated upstream
=======
    '/auth/signin': {
      en: '/auth/signin',
      es: '/auth/iniciar-sesion',
      fr: '/auth/connexion',
    },
    '/auth/signup': {
      en: '/auth/signup',
      es: '/auth/registrarse',
      fr: '/auth/inscription',
    },
    '/auth/signout': {
      en: '/auth/signout',
      es: '/auth/cerrar-sesion',
      fr: '/auth/deconnexion',
    },
    '/dashboard': {
      en: '/dashboard',
      es: '/dashboard',
      fr: '/dashboard',
    },
>>>>>>> Stashed changes
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
