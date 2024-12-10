import HeaderLink from '@/components/ui/links/headerLink/HeaderLink';

import { useTranslations } from 'next-intl';
import SignInButton from '../SignInButton/SignInButton';

const MenuBar = () => {
  const t = useTranslations('Appbar');

  return (
    <div className="w-full h-full md:flex md:grow md:justify-between">
      <div className="flex flex-col gap-3 pt-6 text-black md:pt-0 md:justify-start md:items-center md:flex-row md:text-white ">
        <HeaderLink href={'/courses/publish'}>{t('courses')}</HeaderLink>
        <HeaderLink href="/applications">{t('applications')}</HeaderLink>
        <HeaderLink href="/projects">{t('projects')}</HeaderLink>
        <HeaderLink href="/mentorships">{t('mentorships')}</HeaderLink>
      </div>
      <div className="flex w-full justify-center self-center pt-8 md:w-auto md:pt-0">
        <SignInButton />
      </div>
    </div>
  );
};

export default MenuBar;
