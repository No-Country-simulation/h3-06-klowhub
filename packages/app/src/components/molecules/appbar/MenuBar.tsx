import SignInButton from '@/components/ui/buttons/SignInButton/SignInButton';
import HeaderLink from '@/components/ui/links/headerLink/HeaderLink';
import { useTranslations } from 'next-intl';

const MenuBar = () => {
  const t = useTranslations('Appbar');

  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-3 md:justify-center md:items-center grow text-black md:flex-row md:text-white pt-6">
        <HeaderLink
          href="/courses"
          className="text-inherit px-4 justify-start w-full hover:bg-secondary-200 md:justify-center md:w-auto "
        >
          {t('courses')}
        </HeaderLink>
        <HeaderLink
          href="/applications"
          className="text-inherit px-4 justify-start w-full hover:bg-secondary-200 md:justify-center md:w-auto"
        >
          {t('applications')}
        </HeaderLink>
        <HeaderLink
          href="/projects"
          className="text-inherit px-4 justify-start w-full hover:bg-secondary-200 md:justify-center md:w-auto"
        >
          {t('projects')}
        </HeaderLink>
        <HeaderLink
          href="/mentorships"
          className="text-inherit px-4 justify-start w-full hover:bg-secondary-200 md:justify-center md:w-auto"
        >
          {t('mentorships')}
        </HeaderLink>
      </div>
      <div className="flex w-full justify-center self-center pt-8">
        <SignInButton />
      </div>
    </div>
  );
};

export default MenuBar;
