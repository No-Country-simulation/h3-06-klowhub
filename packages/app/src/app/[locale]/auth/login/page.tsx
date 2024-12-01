// Import Link from i18n/routing to use the routing configuration with language prefixes and custom names
import HaveAccountLink from '@/components/molecules/HaveAccountLink/HaveAccountLink';
import SocialLogin from '@/components/molecules/SocialLogin/SocialLogin';
import HeroAuth from '@/components/organisms/HeroAuth';
import SignInForm from '@/components/organisms/SingInForm';
import H2 from '@/components/ui/Titles/H2';
import { getTranslations } from 'next-intl/server';

const SignInPage = async () => {
  const t = await getTranslations('Auth');
  return (
    <div className="bg-transparent flex flex-row justify-center items-center bg-image bg-cover bg-no-repeat h-full w-full bg-[url('/backgroundLogin.svg')] ">
      <HeroAuth title="KlowHub" className="hidden md:flex">
        {
          t(
            'heroText',
          ) /* Explora, aprende, enseña y conecta. Crea tu cuenta en Klowhub y accede a un mundo de posibilidades. */
        }
      </HeroAuth>
      <div className="bg-background-form opacity-80 w-full min-w-[320px] md:w-2/4 flex flex-col items-center justify-center h-full py-[30px] px-4 md:px-[60px] self-center">
        <H2>{t('form.login') /* Iniciar Sesión */}</H2>
        <SignInForm />
        <SocialLogin />
        <HaveAccountLink
          href="/auth/register"
          question={t('form.notHaveAccount') /* No tienes una cuenta?*/}
        >
          {t('form.register') /*Registrame*/}
        </HaveAccountLink>
      </div>
    </div>
  );
};

export default SignInPage;
