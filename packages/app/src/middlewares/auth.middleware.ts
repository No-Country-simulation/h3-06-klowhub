import { NextRequest, NextResponse } from 'next/server';

export const authMiddleware = (req: NextRequest) => {
  const token = req.headers.get('cookie')?.match(/auth-token=([^;]*)/)?.[1];
  console.log('Token:', token);
  // Define rutas protegidas
  // const protectedRoutes = ['/es/protegido', '/en/protected'];
  console.log(req.nextUrl);
  // if (protectedRoutes.some((route) => req.url.includes(route))) {
  //   if (!token) {
  //     console.log('not token');
  //     const loginUrl = new URL('/login', req.url);
  //     return NextResponse.redirect(loginUrl);
  //   }
  // }

  // Continuar si el token es válido o la ruta no está protegida
  return NextResponse.next();
};
