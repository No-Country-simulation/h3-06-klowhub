import { cn } from '@/_lib';
import SignInButton from '@/components/ui/buttons/SignInButton/SignInButton';
import HeaderLink from '@/components/ui/links/headerLink/HeaderLink';
import Logo from '@/components/ui/Logo/Logo';
import { getTranslations } from 'next-intl/server';
import SwitcherButtonWrapper from '../SwitcherButtonWrapper/SwitcherButtonWrapper';

const AppBar = async ({ className }: { className?: string }) => {
  const t = await getTranslations('Appbar');
  return (
    <div
      className={cn(
        'h-20 flex justify-between items-center gap-3 bg-gradient-bar text-white px-[60px]',
        className,
      )}
    >
      <Logo />

      <SwitcherButtonWrapper
        className="mx-7 flex justify-center items-center"
        leftComponent="Home"
        rightComponent="Platform"
      />

      <div className="flex gap-3 justify-center items-center h-full">
        <HeaderLink href="/courses">{t('courses')}</HeaderLink>
        <HeaderLink href="/applications">{t('applications')}</HeaderLink>
        <HeaderLink href="/projects">{t('projects')}</HeaderLink>
        <HeaderLink href="/mentorships">{t('mentorships')}</HeaderLink>
      </div>

      <SignInButton />
    </div>
  );
};

export default AppBar;
