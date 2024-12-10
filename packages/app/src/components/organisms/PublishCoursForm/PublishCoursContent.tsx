import { BaseButton as Button } from '@/components/ui';
import { useStepStore } from '@/stores/stepStore.store';
import { IModule } from '@shared/types/IModule';
import { FormEvent, useEffect, useState } from 'react';
import { LuPlus } from 'react-icons/lu';
import { ModuleForm } from '.';

const PublishCoursContent = () => {
  const { steps, loadSteps, nextStep, updateStepState, currentStep } =
    useStepStore((state) => state);
  const [modules] = useState<IModule[]>([]);

  useEffect(() => {
    useStepStore.persist.rehydrate();
    loadSteps(steps);
  }, []);

  const submitForm = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    nextStep();
    updateStepState({ state: 'VALID' });
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex flex-col gap-6">
          {modules &&
            modules.length !== 0 &&
            modules.map((module, index) => (
              <ModuleForm key={index} data={module} isOpen={false} />
            ))}
        </div>

        <ModuleForm />

        <div className="bg-gray-950 p-6 mt-10 rounded-lg">
          <Button variant="terciary" size="xs">
            <LuPlus className="w-5 h-5" /> Agregar Módulo
          </Button>
        </div>
      </div>
      <div className="mt-8 pt-5">
        <div className="mt-8 pt-5 w-full flex justify-end">
          <Button
            variant="quaternary"
            size="sm"
            type="button"
            onClick={submitForm}
            disabled={currentStep === steps.length - 1}
          >
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PublishCoursContent;
