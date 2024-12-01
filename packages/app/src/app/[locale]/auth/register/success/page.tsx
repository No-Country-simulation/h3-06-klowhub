// Import Link from i18n/routing to use the routing configuration with language prefixes and custom names
import { Button, Field } from '@/components/ui';
import ButtonLink from '@/components/ui/links/buttonLink/ButtonLink';
import H2 from '@/components/ui/Titles/H2';
import { getTranslations } from 'next-intl/server';
import { RiSendPlane2Line } from 'react-icons/ri';

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
      <form className="flex flex-col gap-5">
        <label>
          No has recibido tu correo? No te preocupes, indicanos tu correo
          electrónico y te enviamos el enlace nuevamente:
        </label>
        <div className="flex flex-row items-center">
          <Field
            type="email"
            name="email"
            id="email"
            className="rounded-r-none"
            fluid
          ></Field>
          <Button type="submit" className="h-[50px] rounded-l-none border-2">
            <RiSendPlane2Line className="h-5 w-5" />
          </Button>
        </div>
      </form>
      <div className="pt-[50px]">
        <ButtonLink size="xl" variant="primary" href="/auth/login">
          {t('form.continue')}
        </ButtonLink>
      </div>
    </div>
  );
};

export default SignUpSuccessPage;
