import { NextRequest, NextResponse } from 'next/server';
import { intlMiddleware } from './middlewares/intlMiddleware.ts/intl.middleware';
import { authMiddleware } from './middlewares/authMiddleware.ts/auth.middleware';

export async function middleware(req: NextRequest) {
  const intlResponse = intlMiddleware(req);
  if (intlResponse) {
    const authResponse = await authMiddleware(req);
    if (authResponse) return authResponse;
    return intlResponse;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/(es|en|fr)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
