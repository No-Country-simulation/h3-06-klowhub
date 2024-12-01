import { getSession } from '@/_lib/actions/session';
import { NextURL } from 'next/dist/server/web/next-url';
import { NextRequest, NextResponse } from 'next/server';
import {
  detectLocale,
  getIsProtectedPaths,
  getLoginPahtInternationalized,
} from './intlRoutes.utils';

export const authMiddleware = async (req: NextRequest) => {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const locale = detectLocale(req);

  if (getIsProtectedPaths(pathname)) {
    const session = await getSession();
    if (!session || !session.user) {
      const loginPath = getLoginPahtInternationalized(locale);
      const loginUrl = new NextURL(`/${locale ?? ''}${loginPath}`, req.url);
      return NextResponse.redirect(loginUrl);
    }
    return false;
  } else {
    return false;
  }
};
