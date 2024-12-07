import { cn } from '@/_lib/utils/cn-utility-function';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC, ReactElement } from 'react';

const toggleButtonVariance = cva(
  'flex justify-center items-center transition-colors duration-300 text-white',
  {
    variants: {
      variant: {
        default: 'p-2',
        rounded: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
export interface IToggleButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof toggleButtonVariance> {
  children: [ReactElement, ReactElement];
  isActive?: boolean;
}

const ToggleButton: FC<IToggleButtonProps> = ({
  children,
  isActive = false,
  variant,
  className,
  ...rest
}) => {
  return (
    <button
      className={cn(toggleButtonVariance({ variant }), className)}
      {...rest}
    >
      {isActive ? children[1] : children[0]}
    </button>
  );
};

export default ToggleButton;
