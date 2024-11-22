import { cn } from '@/_lib/utils/cn-utility-function';
import { HTMLAttributes } from 'react';

const StepperBtnControl = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        'flex flex-row flex-nowrap gap-1 items-center absolute',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default StepperBtnControl;
