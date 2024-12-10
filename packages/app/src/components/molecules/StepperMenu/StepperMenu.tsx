'use client';
import { TStep, useStepStore } from '@/stores/stepStore.store';
import { FC, useEffect } from 'react';
import StepperItem from './StepperItem/StepperItem';
export type TStepperMenuProps = {
  stepConfig: TStep[];
};

const StepperMenu: FC<TStepperMenuProps> = ({ stepConfig }) => {
  const { steps, loadSteps, currentStep } = useStepStore((state) => state);

  useEffect(() => {
    useStepStore.persist.rehydrate();
    loadSteps(stepConfig);
    //Buscar curso borrador si existe
  }, []);

  return (
    <nav aria-label="Progress" className="my-8">
      <ol role="list" className="items-center justify-center flex-nowrap flex">
        {steps &&
          steps.length !== 0 &&
          steps.map((step) => (
            <li key={step.id} className="flex items-center justify-center">
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
