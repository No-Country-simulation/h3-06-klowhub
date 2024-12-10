import {
  LabeledField,
  OptionGroup,
} from '@/components/molecules/FormsMolecules';
import { Field } from '@/components/ui';
import Button from '@/components/ui/buttons/BaseButton/BaseButton';
import { useStepStore } from '@/stores/stepStore.store';
import { FormEvent, useEffect } from 'react';

const PromotionsForm = () => {
  const { steps, loadSteps, nextStep, currentStep } = useStepStore(
    (state) => state,
  );

  useEffect(() => {
    useStepStore.persist.rehydrate();
    loadSteps(steps);
  }, []);

  const submitForm = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('submit');
    nextStep();
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <div className="bg-gray-950 p-6 mt-10 rounded-lg">
          <LabeledField
            label=" Fusiona tus cursos y apps, expande tus posiblidades"
            optionalInfo="  En klowHub te damos la libertad de combinar tus aplicaciones y
            cursos para crear soluciones únicas y personalizadas."
          >
            <OptionGroup
              title="¿Te gustaría ofrecer un descuento en alguno de tus otros productos al comprar este artículo?"
              options={[
                { value: 'true', label: 'Si' },
                { value: 'false', label: 'No' },
              ]}
              register={register('discount')}
            />
          </LabeledField>

          <div>
            Cursos y apps creados por ti
            <LabeledField
              label="Escribe el porcentaje de descuento que ofrecerá al crear este paquete."
              optionalInfo="Escribelo en números. Si coloca '15' será un descuento del 15%"
            >
              <Field type="text" name="descuento" placeholder="Ej.:15" />
            </LabeledField>
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-end w-full gap-3">
        <div>
          <Button
            variant="outline"
            size="sm"
            type="button"
            onClick={() => {}}
            disabled={currentStep === steps.length - 1}
          >
            Guardar como borrador
          </Button>
        </div>
        <div>
          <Button
            variant="quaternary"
            size="sm"
            type="button"
            onClick={submitForm}
            disabled={currentStep === steps.length - 1}
          >
            Publicar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromotionsForm;
