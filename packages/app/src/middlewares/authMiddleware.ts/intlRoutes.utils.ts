import { DEFAULT_LOCALE } from '@/i18n/config/supportedLang';
import { IPathnames, PATHNAMES } from '../../i18n/config/pathnames';
import { PROTECTED_ROUTES } from './protected-routes';
// Detectar el idioma desde el prefijo de la URL o usar el idioma por defecto

export function detectLocale(req: Request): string {
  const url = new URL(req.url);
  const localeMatch = url.pathname.match(/^\/(en|es|fr)(\/|$)/);
  return localeMatch?.[1] || DEFAULT_LOCALE;
}

// Resolver las versiones localizadas de una ruta base
export function resolveLocalizedPaths(basePath: string): string[] {
  const localizedPaths = PATHNAMES[basePath];
  if (!localizedPaths) return []; // Si la ruta no tiene traducción, retornar vacío

  return Object.values(localizedPaths); // Retornar todas las versiones localizadas
}

// Know if a pathname is a protected route.
export function getIsProtectedPaths(pathname: string): boolean {
  const protectedBasePath = PROTECTED_ROUTES;
  const protectedPaths = protectedBasePath.flatMap(resolveLocalizedPaths);
  const pathnameWithoutLocals = removeLocalePrefix(pathname);
  return protectedPaths.includes(pathnameWithoutLocals);
}

// Get the path of the internationalized login path based on locale
export function getLoginPahtInternationalized(locale: string): string {
  return locale !== null
    ? (PATHNAMES['/auth/signin'] as IPathnames)[locale].toString()
    : (PATHNAMES['/auth/signin'] as IPathnames)[DEFAULT_LOCALE].toString();
}

// Remove the intl locale prefix from a pathname
export function removeLocalePrefix(pathname: string): string {
  // Buscar un prefijo de idioma, que sería algo como '/en', '/es', '/fr'
  const localeMatch = pathname.match(/^\/(en|es|fr)(\/|$)/);
  // Si hay un prefijo, eliminarlo
  if (localeMatch) {
    return pathname.replace(localeMatch[0], '/'); // Eliminar el prefijo de idioma
  }
  return pathname; // Si no hay prefijo, devolver el pathname tal cual
}
