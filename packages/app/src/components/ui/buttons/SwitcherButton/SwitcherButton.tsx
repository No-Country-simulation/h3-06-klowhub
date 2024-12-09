import { cn } from '@/_lib';
import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC } from 'react';

const switcherButtonProps = cva(
  'flex px-[6px] py-[2px] rounded-[50px] transition duration-500',
  {
    variants: {
      variant: {
        primary: '',
        secondary: '',
      },
      isActive: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        isActive: true,
        className: 'bg-secondary-300 text-gray-950',
      },
      {
        variant: 'primary',
        isActive: false,
        className: 'bg-transparent text-secondary-300',
      },
      {
        variant: 'secondary',
        isActive: true,
        className: 'text-primary-violet-500 bg-white',
      },
      {
        variant: 'secondary',
        isActive: false,
        className: 'bg-transparent text-white',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      isActive: false,
    },
  },
);

export type TSwitcherButtonProps = VariantProps<typeof switcherButtonProps> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    leftComponent?: React.ReactNode;
    rightComponent?: React.ReactNode;
    isActive: boolean;
  };

const SwitcherButton: FC<TSwitcherButtonProps> = ({
  leftComponent = 'Home',
  rightComponent = 'Platform',
  isActive,
  variant,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(
        ' inline-block p-1 rounded-[50px] align-center overflow-hidden',
        variant === 'primary' && 'bg-secondary-900',
        variant === 'secondary' && 'bg-primary-violet-800',
      )}
    >
      <div className="flex gap-1 items-center justify-center">
        <span
          className={cn(
            switcherButtonProps({ variant, isActive }),
            isActive && 'animate-slide-out',
            isActive ? 'z-10' : 'z-0',
          )}
        >
          {leftComponent}
        </span>
        <span
          className={cn(
            switcherButtonProps({ variant, isActive: !isActive }),
            !isActive && 'animate-slide-in',
            isActive ? 'z-0' : 'z-10',
          )}
        >
          {rightComponent}
        </span>
      </div>
    </button>
  );
};

export default SwitcherButton;
