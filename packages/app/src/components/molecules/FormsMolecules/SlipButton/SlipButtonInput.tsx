import { cn } from '@/_lib/utils/cn-utility-function';
import { FC, HTMLAttributes, ReactNode, Ref } from 'react';

export type TSlipButtonInputProps = HTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
  inputStyles?: string;
  ref: Ref<HTMLInputElement>;
};

const SlipButtonInput: FC<TSlipButtonInputProps> = ({
  icon,
  className,
  inputStyles,
  ref,
  ...rest
}) => {
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
};

export default SlipButtonInput;
