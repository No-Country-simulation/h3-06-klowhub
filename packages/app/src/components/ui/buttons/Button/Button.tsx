import { cn } from '@/_lib';
import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

const buttonProps = cva(
  'text-sm text-inter font-semibold rounded-lg cursor-pointer transition-colors duration-300 ease-in-out flex items-center justify-center gap-3 px-6',
  {
    variants: {
      variant: {
        primary:
          'text-white bg-primary-violet-500 border border-primary-violet-500 hover:bg-primary-violet-400 hover:border-primary-violet-400 active:bg-primary-violet-600',
        secondary:
          'text-primary-violet-200 border border-primary-violet-200 hover:border-primary-violet-400 hover:text-primary-violet-400 active:bg-primary-violet-600 active:text-primary-violet-600',
        terciary:
          'text-primary-violet-200 border-transparent bg-transparent hover:text-primary-violet-400  active:text-primary-violet-600',
        social:
          'bg-white bg-opacity-10 border border-white border-opacity-10 text-white',
      },
      size: {
        xl: 'h-11 min-[250px]',
        l: 'h-10 min-[140px]',
        s: 'h-9 min-[86px]',
      },
      wrap: {
        true: 'whitespace-wrap',
        false: 'whitespace-nowrap',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'l',
      fullWidth: false,
      wrap: false,
    },
  },
);

export type TButtonProps = VariantProps<typeof buttonProps> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<TButtonProps> = ({
  variant,
  size,
  fullWidth,
  wrap,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={cn(buttonProps({ variant, wrap, size, fullWidth }), className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
