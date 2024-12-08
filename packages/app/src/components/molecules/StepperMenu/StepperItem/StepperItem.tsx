import { cn } from '@/_lib';
import { FC } from 'react';
import { LuCheck } from 'react-icons/lu';

export type TStepperItemProps = {
  step: {
    id: number;
    name: string;
    state: string;
  };
  menuLength: number;
  currentStep: number;
};
const StepperItem: FC<TStepperItemProps> = ({
  step,
  currentStep,
  menuLength,
}) => {
  return (
    <div className=" flex flex-row w-full justify-center items-center">
      {step.state === 'VALID' ? (
        <LuCheck className="h-[30px] w-[30px] text-gray-950 bg-success-light rounded-full p-1" />
      ) : (
        <span
          className={cn(
            'text-sm font-mediumtransition-colors rounded-full h-[30px] w-[30px] flex items-center justify-center',
            currentStep === step.id
              ? 'text-gray-950 bg-primary-lavander-200'
              : 'text-gray-950 bg-gray-300 ',
          )}
        >
          {step.id}
        </span>
      )}
      <span className="text-sm font-bold text-gray-50 flex-nowrap pl-4">
        {step.name}
      </span>
      {step.id < menuLength && (
        <span className=" bg-gray-500 w-16 transition-colors h-[3px] mx-4 "></span>
      )}
    </div>
  );
};

export default StepperItem;
