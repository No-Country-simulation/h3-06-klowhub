import { cn } from '@/_lib';
import { ButtonHTMLAttributes, FC } from 'react';

export type TSwitcherButtonProps = {
  leftComponent: React.ReactNode;
  rightComponent: React.ReactNode;
  isActive?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const SwitcherButton: FC<TSwitcherButtonProps> = ({
  leftComponent = 'Home',
  rightComponent = 'Platform',
  isActive,
  ...rest
}) => {
  return (
    <button
      className="inline-flex p-1 rounded-[50px] gap-1 align-center bg-secondary-900 overflow-hidden"
      {...rest}
    >
      <span
        className={cn(
          'flex px-[6px] py-[2px] rounded-[50px] ',
          'transition duration-300',
          isActive ? 'bg-transparent' : 'bg-secondary-300',
          isActive ? 'text-secondary-300' : 'text-white',
          isActive && 'animate-slide-out',
          isActive ? 'z-10' : 'z-0',
        )}
      >
        {leftComponent}
      </span>
      <span
        className={cn(
          'flex px-[6px] py-[2px] rounded-[50px]',
          'transition duration-300',
          !isActive ? 'bg-transparent' : 'bg-secondary-300',
          !isActive ? 'text-secondary-300' : 'text-white',
          !isActive && 'animate-slide-in',
          isActive ? 'z-10' : 'z-0',
        )}
      >
        {rightComponent}
      </span>
    </button>
  );
};

export default SwitcherButton;
