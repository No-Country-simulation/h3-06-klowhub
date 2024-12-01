import HeroAuth from '@/components/organisms/HeroAuth';
import { getTranslations } from 'next-intl/server';
import { ReactNode } from 'react';

const RegisterLayout = async ({ children }: { children: ReactNode }) => {
  const t = await getTranslations('Auth');
  return (
    <div className="bg-transparent flex flex-row justify-center items-center bg-image bg-cover bg-no-repeat h-full w-full bg-[url('/backgroundRegister.svg')]">
      <HeroAuth title="KlowHub" className="hidden md:flex">
        {
          t('heroText') /* Explora, aprende, enseña y conecta. Crea tu cuenta
        en Klowhub y accede a un mundo de posibilidades. */
        }
      </HeroAuth>
      <div className="bg-background-form opacity-80 w-full min-w-[320px] md:w-2/4 flex flex-col items-center justify-center h-full py-[30px] px-4 md:px-[60px] self-center">
        {children}
      </div>
    </div>
  );
};
export default RegisterLayout;
