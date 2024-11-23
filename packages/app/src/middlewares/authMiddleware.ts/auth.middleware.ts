import { NextResponse } from 'next/server';
import {
  detectLocale,
  removeLocalePrefix,
  resolveLocalizedPaths,
} from './utils';
import { PROTECTED_ROUTES } from './protected-routes';
import { PATHNAMES, IPathnames } from '@/i18n/config/pathnames';
import { DEFAULT_LOCALE } from '../../i18n/config/supportedLang';
import { NextURL } from 'next/dist/server/web/next-url';

export const authMiddleware = (req: Request) => {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const locale = detectLocale(req);
  const protectedBasePath = PROTECTED_ROUTES;
  const protectedPaths = protectedBasePath.flatMap(resolveLocalizedPaths);
  const pathnameWithoutLocals = removeLocalePrefix(pathname);

  if (protectedPaths.includes(pathnameWithoutLocals)) {
    console.log('protected route');
    const session = req.headers
      .get('session')
      ?.match(/accessToken=([^;]*)/)?.[1];

    if (!session) {
      console.log('no session');
      const loginPath =
        locale !== null
          ? (PATHNAMES['/auth/signin'] as IPathnames)[locale].toString()
          : (PATHNAMES['/auth/signin'] as IPathnames)[
              DEFAULT_LOCALE
            ].toString();

      console.log('loginPath', loginPath);

      const loginUrl = new NextURL(`/${locale ?? ''}${loginPath}`, req.url);

      console.log('loginUrl', loginUrl);

      return NextResponse.redirect(loginUrl);
    } else {
      console.log('sesion valida, no redirigira');
    }
    console.log('no es una ruta protegida');
  }

  return NextResponse.next();
};
