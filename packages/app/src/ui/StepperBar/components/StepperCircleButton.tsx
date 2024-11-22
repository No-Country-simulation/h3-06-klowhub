import { HTMLAttributes } from 'react';
import { cn } from '@/_lib/utils/cn-utility-function';

/**
 * Circle Button is only for the pagination bar
 */
interface IStepperCircleDotProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

const StepperCircleDot = ({
  active = false,
  ...rest
}: IStepperCircleDotProps) => {
  return (
    <div
      {...rest}
      className={cn(
        ' rounded-full',
        active
          ? 'h-[22px] w-[22px] bg-primary-lavander-100'
          : 'h-4 w-4 bg-primary-lavander',
      )}
    ></div>
  );
};

export default StepperCircleDot;
