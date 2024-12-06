'use client';
import Button from '@/components/ui/buttons/BaseButton/BaseButton';
import { PublishCoursSchema } from '@shared/validation/cours';
import { useState } from 'react';
import { LuArrowLeft } from 'react-icons/lu';
import { z } from 'zod';
import PublishCoursDetail from './PublishCoursDetail/PublishCoursDetail';
import PublishCoursGeneral from './PublishCoursGeneral/PublishCoursGeneral';

type TInputs = z.infer<typeof PublishCoursSchema>;
type TFieldName = keyof TInputs;

const steps = [
  { id: '1', name: 'Información General' },
  { id: '2', name: 'Detalles del curso' },
  { id: '3', name: 'Módulos y lecciones' },
  { id: '4', name: 'Promociones' },
];

const PublishCoursForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPromotionsActive, setIsPromotionsActive] = useState(false);

  const handleNext = () => {
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
      <nav aria-label="Progress" className="my-8">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-sky-600 transition-colors rounded-full ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-sky-600">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>
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

        {currentStep === 0 && (
          <div>
            <PublishCoursGeneral />
          </div>
        )}
        {currentStep === 1 && (
          <div>
            <PublishCoursDetail />
          </div>
        )}
        {currentStep === 2 && <div>ThirdForm</div>}
        {currentStep === 3 && <div>FourthForm</div>}
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
