import { NextRequest, NextResponse } from 'next/server';
import { intlMiddleware } from './middlewares/intlMiddleware.ts/intl.middleware';
import { authMiddleware } from './middlewares/authMiddleware.ts/auth.middleware';

export async function middleware(req: NextRequest) {
  const intlResponse = intlMiddleware(req);

  const authResponse = authMiddleware(req);

  if (intlResponse) return intlResponse;

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(es|en|fr)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)

    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
