'use client';
import Button from '@/components/ui/buttons/BaseButton/BaseButton';
import { useStepStore } from '@/stores/stepStore.store';
import { PublishCoursSchema } from '@shared/validation/cours';
import { useEffect, useState } from 'react';
import { LuArrowLeft } from 'react-icons/lu';
import { z } from 'zod';
import StepperMenu from '../../molecules/StepperMenu/StepperMenu';
import {
  PromotionsForm,
  PublishCoursContent,
  PublishCoursDetail,
  PublishCoursGeneral,
} from './';

type TInputs = z.infer<typeof PublishCoursSchema>;
type TFieldName = keyof TInputs;

const PublishCoursForm = () => {
  const { currentStep, prevStep, steps, loadSteps, getSteps } = useStepStore(
    (state) => state,
  );
  const [course, setCourse] = useState({});

  useEffect(() => {
    useStepStore.persist.rehydrate();
    //Buscar curso borrador si existe
  }, []);

  return (
    <div className="w-full max-w-[1500px] my-0 mx-auto">
      {/* steps */}
      {steps.length !== 0 && (
        <div>
          <StepperMenu stepConfig={steps} />
        </div>
      )}
      <section>
        <Button
          type="button"
          onClick={prevStep}
          disabled={currentStep === 0}
          variant="outline"
          className="outline-none border-none"
          size="xs"
        >
          <LuArrowLeft className="h-6 w-6" /> Volver
        </Button>

        {currentStep === 0 && <PublishCoursGeneral />}
        {currentStep === 1 && <PublishCoursDetail />}
        {currentStep === 2 && <PublishCoursContent />}
        {currentStep === 3 && <PromotionsForm />}
      </section>
    </div>
  );
};

export default PublishCoursForm;
