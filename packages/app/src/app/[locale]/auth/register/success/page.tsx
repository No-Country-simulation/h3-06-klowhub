// Import Link from i18n/routing to use the routing configuration with language prefixes and custom names
import ButtonLink from '@/components/ui/links/buttonLink/ButtonLink';
import H2 from '@/components/ui/Titles/H2';
import { getTranslations } from 'next-intl/server';

const SignUpSuccessPage = async () => {
  const t = await getTranslations('Auth');
  return (
    <div className="flex flex-col gap-5 max-w-[400px] py-[60px] px-[30px] items-center grow">
      <div>
        <H2>{t('form.register') /* Registro */}</H2>
      </div>
      <p className="text-base font-bold w-full">
        {
          t(
            'form.registerSuccess.title',
          ) /* Último paso. Verifica la casilla de tu email. */
        }
      </p>
      <p className="text-sm font-normal">
        {
          t(
            'form.registerSuccess.description',
          ) /* Si no recibes un correo, revisa tu bandeja de spam. */
        }
      </p>
      <div className="pt-[50px]">
        <ButtonLink size="xl" variant="primary" href="/auth/login">
          {t('form.continue')}
        </ButtonLink>
      </div>
    </div>
  );
};

export default SignUpSuccessPage;
