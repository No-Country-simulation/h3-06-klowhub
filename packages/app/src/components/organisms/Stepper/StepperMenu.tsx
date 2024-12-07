import { FC } from 'react';
import { TStep } from '../PublishCoursForm/PublishCoursForm';
import StepperItem from './StepperItem/StepperItem';
export type TStepperMenuProps = {
  steps: TStep[];
  currentStep: number;
};

const StepperMenu: FC<TStepperMenuProps> = ({ steps, currentStep }) => {
  return (
    <nav aria-label="Progress" className="my-8">
      <ol role="list" className="items-center justify-center flex-nowrap flex">
        {steps.map((step, index) => (
          <li key={step.name} className="flex items-center justify-center">
            <StepperItem
              step={{ id: step.id, name: step.name, state: step.state }}
              currentStep={currentStep}
              menuLength={steps.length}
            />
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default StepperMenu;
