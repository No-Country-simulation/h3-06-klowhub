import SignInButton from '@/components/ui/buttons/SignInButton/SignInButton';
import HeaderLink from '@/components/ui/links/headerLink/HeaderLink';
import { useTranslations } from 'next-intl';

const MenuBar = () => {
  const t = useTranslations('Appbar');

  return (
    <div className="w-full h-full md:flex md:grow md:justify-between">
      <div className="flex flex-col gap-3 pt-6 text-black md:pt-0 md:justify-start md:items-center md:flex-row md:text-white ">
        <HeaderLink
          href="/courses"
          className="text-inherit px-4 justify-start w-full hover:bg-secondary-200 md:justify-center  "
        >
          {t('courses')}
        </HeaderLink>
        <HeaderLink
          href="/applications"
          className="text-inherit px-4 justify-start w-full hover:bg-secondary-200 md:justify-center md:w-auto md:px-0 lg:px-4"
        >
          {t('applications')}
        </HeaderLink>
        <HeaderLink
          href="/projects"
          className="text-inherit px-4 justify-start w-full hover:bg-secondary-200 md:justify-center md:w-auto md:px-0 lg:px-4"
        >
          {t('projects')}
        </HeaderLink>
        <HeaderLink
          href="/mentorships"
          className="text-inherit px-4 justify-start w-full hover:bg-secondary-200 md:justify-center md:w-auto md:px-0 lg:px-4"
        >
          {t('mentorships')}
        </HeaderLink>
      </div>
      <div className="flex w-full justify-center self-center pt-8 md:w-auto md:pt-0">
        <SignInButton />
      </div>
    </div>
  );
};

export default MenuBar;
