// Import Link from i18n/routing to use the routing configuration with language prefixes and custom names
import HaveAccountLink from '@/components/molecules/HaveAccountLink/HaveAccountLink';
import SocialLogin from '@/components/molecules/SocialLogin/SocialLogin';
import SingUpForm from '@/components/organisms/SingUpForm';
import H2 from '@/components/ui/Titles/H2';
import { getTranslations } from 'next-intl/server';

const SignUpPage = async () => {
  const t = await getTranslations('Auth');
  return (
    <>
      <H2>{t('form.register') /* Iniciar Sesión */}</H2>
      <SingUpForm />
      <SocialLogin />
      <HaveAccountLink
        href="/auth/login"
        question={t('form.haveAccount') /* Ya tienes una cuenta?*/}
      >
        {t('form.login') /*Iniciar Sesion*/}
      </HaveAccountLink>
    </>
  );
};

export default SignUpPage;
