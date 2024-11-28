// Import Link from i18n/routing to use the routing configuration with language prefixes and custom names
import SocialLogin from '@/components/molecules/loggin/SocialLogin/SocialLogin';
import HeroAuth from '@/components/organisms/HeroAuth';
import SignInForm from '@/components/organisms/SingInForm';
import TextLink from '@/components/ui/links/textLink/TextLink';
import H2 from '@/components/ui/Titles/H2';
import { getTranslations } from 'next-intl/server';

const SignInPage = async () => {
  const t = await getTranslations('Auth');
  return (
    <div className="bg-transparent flex flex-row justify-center items-center bg-image bg-cover bg-no-repeat h-full w-full  bg-[url('/backgroundLogin.svg')] ">
      <HeroAuth title="KlowHub">
        {
          t('heroText') /* Explora, aprende, enseña y conecta. Crea tu cuenta
        en Klowhub y accede a un mundo de posibilidades. */
        }
      </HeroAuth>
      <div className="bg-background-form opacity-80  w-2/4 flex flex-col items-center justify-center h-full py-[30px] px-[60px]">
        <H2>{t('form.login') /* Iniciar Sesión */}</H2>
        <SignInForm />
        <SocialLogin />
        <div className="flex justify-content-center gap-[6px]">
          <span className="text-white">
            {t('form.notHaveAccount') /* No tienes una cuenta?*/}
          </span>
          <TextLink href="/auth/signup" variant="primary">
            {t('form.register') /*Registrame*/}
          </TextLink>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
