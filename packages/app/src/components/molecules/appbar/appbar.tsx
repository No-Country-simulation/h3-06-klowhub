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
        'h-20 flex max-w-full justify-between items-center gap-3 bg-gradient-bar text-white px-8 md:px-6 lg:px-[60px]',
        className,
      )}
    >
      <Logo className="w-14 " />

      <SwitcherButtonWrapper
        className="mx-7 justify-center items-center hidden lg:flex"
        leftComponent="Home"
        rightComponent="Platform"
      />
      <div className="md:grow">
        <MenuNavbarCollapse>
          <MenuBar />
        </MenuNavbarCollapse>
      </div>
    </div>
  );
};

export default AppBar;
