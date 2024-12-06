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
  '/auth/login': {
    en: '/auth/login',
    es: '/auth/iniciar-sesion',
    fr: '/auth/connexion',
  },
  '/auth/register': {
    en: '/auth/register',
    es: '/auth/registrarse',
    fr: '/auth/inscription',
  },
  '/auth/register/success': {
    en: '/auth/register/success',
    es: '/auth/registrarse/success',
    fr: '/auth/inscription/success',
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
  '/projects': {
    en: '/projects',
    es: '/proyectos',
    fr: '/projets',
  },
  '/mentorships': {
    en: '/mentorships',
    es: '/mentorias',
    fr: '/mentorships',
  },
  '/applications': {
    en: '/applications',
    es: '/aplicaciones',
    fr: '/applications',
  },
  '/courses': {
    en: '/courses',
    es: '/cursos',
    fr: '/cours',
  },
  '/courses/publish': {
    en: '/courses/publish',
    es: '/cursos/publicar',
    fr: '/cours/publier',
  },
};
