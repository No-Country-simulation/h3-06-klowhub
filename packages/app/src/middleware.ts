import { NextRequest, NextResponse } from 'next/server';
import { intlMiddleware } from './middlewares/intl.middleware';
//import { authMiddleware } from './middlewares/auth.middleware';

export async function middleware(req: NextRequest) {
  // Ejecutar middlewares uno tras otro
  const intlResponse = intlMiddleware(req);

  //TODO: If I implement authentication, as the path is changed based con locale lang, I have a 404 not found problem.

  // const authResponse = authMiddleware(req);
  // // Si `authMiddleware` devuelve una respuesta, detener el flujo
  // if (authResponse) return authResponse;
  // // Si `intlMiddleware` devuelve una respuesta (como redirecciones), detener el flujo
  if (intlResponse) return intlResponse;

  // Si ningún middleware devuelve una respuesta, continuar con la solicitud
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
