import { cn } from '@/_lib';
import { Link } from '@/i18n/routing';
import { cva, VariantProps } from 'class-variance-authority';

const buttonLinkProps = cva(
  'py-3 text-inter text-base border font-medium cursor-pointer transition-colors duration-300 ease-in-out inline-flex items-center justify-center gap-[10px]',
  {
    variants: {
      variant: {
        primary:
          'text-secondary-900 border-secondary-200 bg-secondary-200 hover:border-secondary-300 hover:bg-secondary-300 active:border-secondary-300 active:bg-secondary-300 disabled:text-gray-700d isabled:border-gray-300 disabled:bg-gray-300',
        secondary:
          'text-secondary-800 border-secondary-400 bg-gray-50 hover:border-secondary-400 hover:text-gray-900 hover:bg-secondary-400 active:bg-secondary-400 active:border-secondary-400 disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-700',
        terciary:
          'text-gray-800 border-gray-50 shadow-md bg-gray-50 hover:text-primary-violet-400  active:text-primary-lavander-700 active:bg-primary-lavander-100 active:border-primary-lavander-100 disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-700',
        quaternary:
          'bg-primary-lavander-200  border-primary-lavander-200 text-gray-950 hover:bg-primary-lavander-300 hover:border-primary-lavander-300 active:bg-primary-lavander-300 active:border-primary-lavander-300 disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-700',
        quinary:
          'text-primary-lavander-700  border-primary-lavander-700  bg-gray-50 hover:bg-primary-lavander-100 active:bg-primary-lavander-100 disabled:bg-gray-300 disabled:border-gray-300 disabled:text-gray-700',
        outline:
          'text-gray-50  border-gray-50 bg-transparent hover:text-primary-lavander-100  hover:border-primary-lavander-100 active:text-primary-lavander-200 active:border-primary-lavander-200 disabled:bg-transparent disabled:border-gray-400 disabled:text-gray-400',
      },
      size: {
        xl: 'h-[50px] min-w-[350px] px-7 ',
        lg: 'h-[50px] min-w-[280px] px-7',
        md: 'h-[50px] min-w-[200px] px-7',
        sm: 'h-[50px] px-6',
        xs: 'h-[34px] px-4',
      },
      wrap: {
        true: 'whitespace-wrap',
        false: 'whitespace-nowrap',
      },
      rounded: {
        full: 'rounded-[50px]',
        left: 'rounded-tl-[50px] rounded-bl-[50px]',
        right: 'rounded-tr-[50px] rounded-br-[50px]',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-min-content',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg',
      rounded: 'full',
      fullWidth: false,
      wrap: false,
    },
  },
);

export type TButtonLinkProps = VariantProps<typeof buttonLinkProps> & {
  children: React.ReactNode;
  href: string;
};
const ButtonLink: React.FC<TButtonLinkProps> = ({
  variant,
  size,
  wrap,
  rounded,
  fullWidth,
  children,
  href,
  ...rest
}) => {
  return (
    <Link
      className={cn(
        buttonLinkProps({ variant, rounded, wrap, size, fullWidth }),
      )}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
