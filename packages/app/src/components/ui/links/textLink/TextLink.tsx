import { cn } from '@/_lib';
import { Link } from '@/i18n/routing';
import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';

const textLinkProps = cva(' no-underline ', {
  variants: {
    variant: {
      default: '',
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

/*************  ✨ Codeium Command ⭐  *************/
/**
 * A component for rendering a simple text link
 * @param {THeaderLink} props The props of the component
 * @returns {ReactElement} The rendered component
 */
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
