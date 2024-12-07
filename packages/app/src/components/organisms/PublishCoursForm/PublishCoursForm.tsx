'use client';
import Button from '@/components/ui/buttons/BaseButton/BaseButton';
import { PublishCoursSchema } from '@shared/validation/cours';
import { useState } from 'react';
import { LuArrowLeft } from 'react-icons/lu';
import { z } from 'zod';
import StepperMenu from '../Stepper/StepperMenu';
import PublishCoursContent from './PublishCoursContent/PublishCoursContent';
import PublishCoursDetail from './PublishCoursDetail/PublishCoursDetail';
import PublishCoursGeneral from './PublishCoursGeneral/PublishCoursGeneral';

type TInputs = z.infer<typeof PublishCoursSchema>;
type TFieldName = keyof TInputs;

export type TStep = {
  id: number;
  name: string;
  form: JSX.Element;
  state: string;
};

const steps = [
  {
    id: 1,
    name: 'Información General',
    form: <PublishCoursGeneral />,
    state: 'pending',
  },
  {
    id: 2,
    name: 'Detalles del curso',
    form: <PublishCoursDetail />,
    state: 'pending',
  },
  {
    id: 3,
    name: 'Módulos y lecciones',
    form: <PublishCoursContent />,
    state: 'pending',
  },
];

const PublishCoursForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPromotionsActive, setIsPromotionsActive] = useState(false);

  const handleNext = () => {
    // Submit form
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div className="w-full max-w-[1500px] my-0 mx-auto">
      {/* steps */}
      <StepperMenu steps={steps} currentStep={currentStep} />
      <section>
        <Button
          type="button"
          onClick={handlePrev}
          disabled={currentStep === 0}
          variant="outline"
          className="outline-none border-none"
          size="xs"
        >
          <LuArrowLeft className="h-6 w-6" /> Volver
        </Button>
        {/* form */}

        {steps[currentStep] && <div>{steps[currentStep].form}</div>}

        {/* navigation */}
        <div className="mt-8 pt-5">
          <div className="mt-8 pt-5 w-full flex justify-end">
            <Button
              variant="quaternary"
              size="sm"
              type="button"
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
            >
              Continuar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublishCoursForm;
