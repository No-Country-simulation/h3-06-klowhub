import { cn } from '@/_lib/utils/cn-utility-function';
import { HTMLAttributes, ReactNode, Ref, forwardRef } from 'react';

export type TSlipButtonInputProps = HTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
  alt?: string;
  inputStyles?: string;
};

const SlipButtonInput = forwardRef<HTMLInputElement, TSlipButtonInputProps>(
  (
    { icon, alt, className, inputStyles, ...rest }: TSlipButtonInputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <div className={cn('flex w-full gap-2 items-center', className)}>
        {icon && icon}
        <input
          className={cn(
            'border-none rounded-l-2xl w-full text-base outline-none bg-transparent',
            inputStyles,
          )}
          {...rest}
          ref={ref}
        />
      </div>
    );
  },
);

export default SlipButtonInput;
