import AppSheetLogo from '@/assets/appSheetLogo.svg';
import PowerAppLogo from '@/assets/powerAppLogo.svg';
import {
  LabeledField,
  OptionGroup,
  TextArea,
} from '@/components/molecules/FormsMolecules';
import { BaseButton as Button, Field, FileField, Tag } from '@/components/ui';

import { useStepStore } from '@/stores/stepStore.store';
import { FormEvent, useEffect } from 'react';

const PublishCoursGeneral = () => {
  const {
    currentStep,
    nextStep,
    steps,
    getStep,
    getCurrentStep,
    loadSteps,
    updateStepState,
  } = useStepStore((state) => state);

  useEffect(() => {
    useStepStore.persist.rehydrate();
    loadSteps(steps);
  }, []);

  const submitForm = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('submit');
    nextStep();
    const currentStep = getCurrentStep();
    const step = getStep(currentStep);
    console.log('step', step);
    updateStepState({ ...step, state: 'VALID' });
    const newstep = getStep(currentStep);
    console.log(newstep);
  };

  return (
    <div>
      <form className="w-full max-w-[1500px] my-0 mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between w-full text-white bg-gray-950 rounded-lg p-6 shadow-md ">
          <div className="flex flex-col w-full gap-6">
            <LabeledField
              label="Titulo del curso:"
              optionalInfo="Máximo 70 caracteres"
            >
              <Field
                placeholder="Ej: Aprende a desarrollar aplicaciones con AppSheet"
                type="text"
                className="max-w-[700px]"
              />
            </LabeledField>

            <TextArea
              label="Descripción del curso:"
              maxLength={180}
              rows={3}
              optionalInfo="Escribe una breve descripción de qué se trata. Máximo 180 caracteres."
              placeholder="Ej.: Aprende a crear flujos de trabajo automatizados en AppSheet, optimizando la gestión de tareas y aprobaciones, lo que mejorará la productividad en tus proyectos."
              className="max-w-[700px]"
            />
          </div>

          <div className="flex flex-col text-sm text-gray-50 gap-3 max-w-[507px]">
            <p className="font-semibold">Imagen de portada:</p>
            <p className="font-normal">
              Se recomienda que la imagen sea representativa del curso y
              atractiva para que capte la atención de posibles estudiantes.
            </p>
            <FileField photo="" onChange={() => {}} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row n w-full text-white bg-gray-950 rounded-lg p-6 shadow-md  flex-wrap gap-7 md:gap-4 justify-between">
          <div className="flex flex-col gap-6">
            <OptionGroup
              title="Titulo del curso:"
              className=" md:max-w-[700px]"
              options={[
                { value: 'Gratuito', label: 'Gratuito' },
                { value: 'Pago', label: 'Pago' },
              ]}
              name="precio"
            />
            <LabeledField
              label="Precio:"
              optionalInfo="Escribe el valor en pesos argentinos"
            >
              <Field
                placeholder="Ej: 10000"
                type="text"
                className="max-w-[266px]"
              />
            </LabeledField>
          </div>

          <OptionGroup
            title="Nivel de competencia:"
            className="md:max-w-[700px]"
            options={[
              { value: 'Basico', label: 'Básico' },
              { value: 'Intermedio', label: 'Intermedio' },
              { value: 'Avanzado', label: 'Avanzado' },
            ]}
            name="competencia"
          />
          <OptionGroup
            title="Plataforma:"
            options={[
              {
                value: 'appsheet',
                label: (
                  <Tag
                    icon={<img src={AppSheetLogo.src} alt="PowerApp Logo" />}
                  >
                    AppSheet
                  </Tag>
                ),
              },
              {
                value: 'powerapps',
                label: (
                  <Tag
                    icon={<img src={PowerAppLogo.src} alt="PowerApp Logo" />}
                  >
                    Power Apps
                  </Tag>
                ),
              },
            ]}
            name="plataforma"
          />
          <LabeledField
            label="Duración del curso:"
            optionalInfo="Escribe la cantidad en horas."
          >
            <Field
              placeholder="Ej: 12"
              type="text"
              name="duracion"
              className="max-w-[266px]"
            ></Field>
          </LabeledField>
        </div>
      </form>
      {/* navigation */}
      <div className="">
        <div className="mt-8 w-full flex justify-end">
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

export default PublishCoursGeneral;
