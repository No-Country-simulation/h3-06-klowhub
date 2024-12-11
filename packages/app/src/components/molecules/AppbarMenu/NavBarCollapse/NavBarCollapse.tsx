'use client';
import { cn } from '@/_lib';
import ToggleButton from '@/components/ui/buttons/ToggleButton/ToggleButton';
import { FC, MouseEvent, ReactNode, useState } from 'react';
import { GrClose, GrMenu } from 'react-icons/gr';

export type TMenuNavbarCollapseProps = {
  className?: string | null;
  children: ReactNode;
};

const MenuNavbarCollapse: FC<TMenuNavbarCollapseProps> = ({
  className,
  children,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenuView = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuView = () => {
    setIsMenuOpen(false);
  };
  const closeIfOptionChosen = (
    e: MouseEvent<HTMLDivElement> & { target: Element },
  ) => {
    const tagname = e?.target?.tagName.toLowerCase() || '';
    if (tagname === 'a') setIsMenuOpen(false);
  };

  return (
    <nav className={cn('h-screen md:h-auto', className)}>
      <ToggleButton
        className="border-none bg-transparent h-full md:hidden"
        onClick={onToggleMenuView}
        isActive={isMenuOpen}
      >
        <GrMenu />
        <GrClose />
      </ToggleButton>

      <div
        onClick={closeIfOptionChosen}
        className={cn(
          'fixed top-0 right-0 bottom-0 justify-start rounded-bl-2xl rounded-tl-2xl bg-white  text-right max-w-0 overflow-x-hidden transition-max-w duration-200 ease-in-out z-50',
          'md:flex md:static md:w-full md:rounded-none md:bg-transparent md:max-w-none md:h-full md:text-center md:items-center md:grow',
          isMenuOpen &&
            'flex flex-col max-w-[80vw] w-full justify-start items-start py-2 md:py-0 md:flex-row md:max-w-none md:grow md:justify-between md:items-center',
        )}
      >
        <div
          className={'relative top-3 left-3 md:static md:flex md:h-full '}
          onClick={closeMenuView}
        >
          <GrClose className="text-black w-5 h-5 md:hidden" />
        </div>
        {children}
      </div>
    </nav>
  );
};
export default MenuNavbarCollapse;
