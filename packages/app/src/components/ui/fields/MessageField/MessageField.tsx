import React, { FC, HTMLAttributes } from 'react';
import { cn } from '@/_lib';
import { cva, VariantProps } from 'class-variance-authority';

const messageFielProps = cva('text-sm', {
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
