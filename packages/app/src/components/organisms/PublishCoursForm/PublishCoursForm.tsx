'use client';
import Button from '@/components/ui/buttons/BaseButton/BaseButton';
import { useStepStore } from '@/stores/stepStore.store';
import { useEffect } from 'react';
import { LuArrowLeft } from 'react-icons/lu';
import StepperMenu from '../../molecules/StepperMenu/StepperMenu';
import {
  PublishCoursContent,
  PublishCoursDetail,
  PublishCoursGeneral,
} from './';

const PublishCoursForm = () => {
  const { currentStep, prevStep, steps, resetCurrentStep } = useStepStore(
    (state) => state,
  );
  // const [course, setCourse] = useState({});

  useEffect(() => {
    useStepStore.persist.rehydrate();
    resetCurrentStep();
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
          disabled={currentStep === 1}
          variant="outline"
          className="outline-none border-none"
          size="xs"
        >
          <LuArrowLeft className="h-6 w-6" /> Volver
        </Button>

        {currentStep === 1 && <PublishCoursGeneral />}
        {currentStep === 2 && <PublishCoursDetail />}
        {currentStep === 3 && <PublishCoursContent />}
        {currentStep === 4 && <PublishCoursContent />}
      </section>
    </div>
  );
};

export default PublishCoursForm;
