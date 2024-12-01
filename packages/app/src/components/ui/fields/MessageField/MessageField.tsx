import { cn } from '@/_lib';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';

const messageFielProps = cva('flex w-fulltext-sm flex-wrap', {
  variants: {
    variant: {
      default: ' text-gray-400',
      error: 'text-invalid',
      success: 'text-success',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type TMessageFieldProps = VariantProps<typeof messageFielProps> &
  HTMLAttributes<HTMLSpanElement>;

const MessageField: FC<TMessageFieldProps> = ({ children, variant }) => {
  return <span className={cn(messageFielProps({ variant }))}>{children}</span>;
};

export default MessageField;
