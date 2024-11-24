import { NextRequest, NextResponse } from 'next/server';
import {
  detectLocale,
  removeLocalePrefix,
  resolveLocalizedPaths,
} from './utils';
import { PROTECTED_ROUTES } from './protected-routes';
import { PATHNAMES, IPathnames } from '@/i18n/config/pathnames';
import { DEFAULT_LOCALE } from '../../i18n/config/supportedLang';
import { NextURL } from 'next/dist/server/web/next-url';
import { getSession } from '@/_lib/modules/session';

export const authMiddleware = async (req: NextRequest) => {
  console.log('req.url', req.url);
  const url = new URL(req.url);
  const pathname = url.pathname;
  const locale = detectLocale(req);
  const protectedBasePath = PROTECTED_ROUTES;
  const protectedPaths = protectedBasePath.flatMap(resolveLocalizedPaths);
  const pathnameWithoutLocals = removeLocalePrefix(pathname);

  if (protectedPaths.includes(pathnameWithoutLocals)) {
    const session = await getSession();
    console.log('session: ', session ? 'true' : 'false');
    if (!session || !session.user) {
      const loginPath =
        locale !== null
          ? (PATHNAMES['/auth/signin'] as IPathnames)[locale].toString()
          : (PATHNAMES['/auth/signin'] as IPathnames)[
              DEFAULT_LOCALE
            ].toString();
      const loginUrl = new NextURL(`/${locale ?? ''}${loginPath}`, req.url);
      return NextResponse.redirect(loginUrl);
    }
    console.log('continuar a', req.nextUrl.pathname);
    return false;
  } else {
    console.log('No protegida: continuar a ', req.nextUrl.pathname);
    return false;
  }
};
