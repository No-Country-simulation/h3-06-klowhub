import { cn } from '@/_lib';
import { MenuBar } from '@/components/molecules';
import MenuNavbarCollapse from '@/components/molecules/AppbarMenu/NavBarCollapse/NavBarCollapse';
import Logo from '@/components/ui/Logo/Logo';
import SwitcherButtonWrapper from '../SwitcherButtonWrapper/SwitcherButtonWrapper';

const AppBar = ({ className }: { className?: string }) => {
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
        variant="primary"
        isActive={false}
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
