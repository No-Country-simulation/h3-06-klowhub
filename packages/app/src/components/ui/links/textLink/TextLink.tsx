import { cn } from '@/_lib';
import { Link } from '@/i18n/routing';
import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const textLinkProps = cva(' no-underline ', {
  variants: {
    variant: {
      default: 'text-white',
      primary: 'uppercase text-primary-violet-200',
      secondary: 'text-primary-violet-200',
    },
    size: {
      sm: 'text-sm',
      base: 'text-base',
    },
    defaultVariants: {
      variant: 'default',
      size: 'base',
    },
  },
});

export type TTextLinkProps = VariantProps<typeof textLinkProps> & {
  children: React.ReactNode;
  href: string;
  className?: string;
};

const TextLink: FC<TTextLinkProps> = ({
  children,
  href,
  variant,
  size,
  className,
}) => {
  return (
    <Link
      href={href}
      className={cn(textLinkProps({ variant, size }), className)}
    >
      {children}
    </Link>
  );
};

export default TextLink;
