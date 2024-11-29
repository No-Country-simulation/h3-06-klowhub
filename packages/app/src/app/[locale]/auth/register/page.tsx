// Import Link from i18n/routing to use the routing configuration with language prefixes and custom names
import HaveAccountLink from '@/components/molecules/HaveAccountLink/HaveAccountLink';
import SocialLogin from '@/components/molecules/SocialLogin/SocialLogin';
import HeroAuth from '@/components/organisms/HeroAuth';
import SingUpForm from '@/components/organisms/SingUpForm';
import H2 from '@/components/ui/Titles/H2';
import { getTranslations } from 'next-intl/server';

const SignUpPage = async () => {
  const t = await getTranslations('Auth');
  return (
    <div className="bg-transparent flex flex-row justify-center items-center bg-image bg-cover bg-no-repeat h-full w-full bg-[url('/backgroundRegister.svg')]">
      <HeroAuth title="KlowHub">
        {
          t('heroText') /* Explora, aprende, enseña y conecta. Crea tu cuenta
        en Klowhub y accede a un mundo de posibilidades. */
        }
      </HeroAuth>
      <div className="bg-background-form opacity-80  w-2/4 flex flex-col items-center justify-center h-full py-[30px] px-[60px] self-center">
        <H2>{t('form.register') /* Iniciar Sesión */}</H2>
        <SingUpForm />
        <SocialLogin />
        <HaveAccountLink
          href="/auth/login"
          question={t('form.haveAccount') /* Ya tienes una cuenta?*/}
        >
          {t('form.login') /*Iniciar Sesion*/}
        </HaveAccountLink>
      </div>
    </div>
  );
};

export default SignUpPage;
