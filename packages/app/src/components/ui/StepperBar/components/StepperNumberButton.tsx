import { HTMLAttributes } from 'react';
import { cn } from '@/_lib/utils/cn-utility-function';

/**
 * Circle Button is only for the pagination bar
 */
interface IStepperNumberDotProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

const StepperNumberDot = ({
  active = false,
  children,
  ...rest
}: IStepperNumberDotProps) => {
  return (
    <div
      {...rest}
      className={cn(
        'rounded-full h-3 w-3 hover:text-primary-lavander-100',
        active ? 'text-primary-lavander-100' : 'text-primary-lavander-300',
      )}
    >
      {children}
    </div>
  );
};

export default StepperNumberDot;
