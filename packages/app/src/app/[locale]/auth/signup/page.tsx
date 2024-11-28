// Import Link from i18n/routing to use the routing configuration with language prefixes and custom names
import SocialLogin from '@/components/molecules/loggin/SocialLogin/SocialLogin';
import HeroAuth from '@/components/organisms/HeroAuth';
import SingUpForm from '@/components/organisms/SingUpForm';
import TextLink from '@/components/ui/links/textLink/TextLink';
import H2 from '@/components/ui/Titles/H2';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

const SignUpPage = async () => {
  const t = await getTranslations('Auth');
  return (
    <div className="bg-transparent flex flex-row justify-center items-center bg-image bg-cover bg-no-repeat h-full w-full  bg-[url('/backgroundRegister.svg')]">
      <HeroAuth title="KlowHub">
        {
          t('heroText') /* Explora, aprende, enseña y conecta. Crea tu cuenta
        en Klowhub y accede a un mundo de posibilidades. */
        }
      </HeroAuth>
      <div className="bg-background-form opacity-80  w-2/4 flex flex-col items-center justify-center h-full py-[30px] px-[60px]">
        <H2>{t('form.register') /* Iniciar Sesión */}</H2>
        <SingUpForm />
        <SocialLogin />
        <div className="flex justify-content-center gap-[6px]">
          <span className="text-white">
            {t('form.haveAccount') /* No tienes una cuenta?*/}
          </span>
          <TextLink href="/auth/signin" variant="primary">
            {t('form.login') /*Registrame*/}
          </TextLink>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
