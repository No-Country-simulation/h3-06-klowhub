import { cn } from '@/_lib';
import { MenuBar } from '@/components/molecules';
import MenuNavbarCollapse from '@/components/molecules/AppbarMenu/NavBarCollapse/NavBarCollapse';
import Logo from '@/components/ui/Logo/Logo';

const AppBar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'h-20 flex max-w-full justify-between items-center gap-3 bg-gradient-bar text-white px-8 md:px-6 lg:px-[60px]',
        className,
      )}
    >
      <Logo className="w-14 " />

      <div className="md:grow">
        <MenuNavbarCollapse>
          <MenuBar />
        </MenuNavbarCollapse>
      </div>
    </div>
  );
};

export default AppBar;
