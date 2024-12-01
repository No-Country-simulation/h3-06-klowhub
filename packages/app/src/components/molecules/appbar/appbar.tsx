import { cn } from '@/_lib';
import Logo from '@/components/ui/Logo/Logo';
import { getTranslations } from 'next-intl/server';
import SwitcherButtonWrapper from '../SwitcherButtonWrapper/SwitcherButtonWrapper';
import MenuBar from './MenuBar';
import MenuNavbarCollapse from './NavBarCollapse/NavBarCollapse';

const AppBar = async ({ className }: { className?: string }) => {
  const t = await getTranslations('Appbar');
  return (
    <div
      className={cn(
        'h-20 flex max-w-full justify-between items-center gap-3 bg-gradient-bar text-white px-8 md:px-[60px]',
        className,
      )}
    >
      <Logo className="w-14 " />

      <SwitcherButtonWrapper
        className="mx-7 justify-center items-center hidden md:flex"
        leftComponent="Home"
        rightComponent="Platform"
      />

      {/* <Button className=" md:hidden">Menu</Button>
        <div className="hidden md:flex w-full justify-between">
          <div className="flex gap-3 justify-center items-center h-full">
            <HeaderLink href="/courses">{t('courses')}</HeaderLink>
            <HeaderLink href="/applications">{t('applications')}</HeaderLink>
            <HeaderLink href="/projects">{t('projects')}</HeaderLink>
            <HeaderLink href="/mentorships">{t('mentorships')}</HeaderLink>
          </div>

          <SignInButton />
        </div> */}
      <MenuNavbarCollapse>
        <MenuBar />
      </MenuNavbarCollapse>
    </div>
  );
};

export default AppBar;
