export interface IPathnames {
  [path: string]: string | { [locale: string]: string };
}

export const PATHNAMES: IPathnames = {
  '/': '/',
  '/about': {
    en: '/about',
    es: '/sobre-nosotros',
    fr: '/a-propos',
  },
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
  '/profile': {
    en: '/profile',
    es: '/perfil',
    fr: '/profil',
  },
};
