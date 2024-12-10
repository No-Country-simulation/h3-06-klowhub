'use client';
import {
  DropDownField,
  LabeledField,
  TagField,
  Tiptap,
} from '@/components/molecules/FormsMolecules';
import { BaseButton as Button, MessageField } from '@/components/ui';
import { useStepStore } from '@/stores/stepStore.store';
import { zodResolver } from '@hookform/resolvers/zod';
import sectorOptions from '@shared/data/sectorOptions.json';
import { CourseSchemaDetail } from '@shared/validation/cours';
import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';

type Inputs = z.infer<typeof CourseSchemaDetail>;

const PublishDetailCoursForm = () => {
  const { steps, loadSteps, nextStep, updateStepState, currentStep } =
    useStepStore((state) => state);

  const {
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      langage: 'es',
      sector: 'Atención al cliente',
    },
    mode: 'onChange',
    resolver: zodResolver(CourseSchemaDetail),
  });

  useEffect(() => {
    useStepStore.persist.rehydrate();
    loadSteps(steps);
  }, []);

  const professForm: SubmitHandler<Inputs> = async (data) => {
    await trigger(
      [
        'descriptionContent',
        'competences',
        'requirements',
        'langage',
        'sector',
        'labels',
      ],
      {
        shouldFocus: true,
      },
    );
    console.log('formulario enviado', data);

    updateStepState({ state: 'VALID' });
    nextStep();
  };

  const submitForm = (data: Inputs) => {
    console.log(data);
    professForm(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="flex w-full  text-white bg-gray-950 rounded-lg p-6 shadow-mdflex sm:flex-row gap-[30px] flex-col max-w-[1500px]">
        <div className="flex flex-col gap-[30px] w-full sm:flex-grow-2">
          <div className="flex flex-col gap-3">
            <LabeledField
              label=" Haz una descripción detallada del contenido del curso y a quién está
            dirigido."
            >
              <Controller
                name="descriptionContent"
                control={control}
                render={({ field: { ref, name, onBlur, onChange } }) => (
                  <Tiptap
                    content=""
                    placeholder="Escribe aquí tu texto"
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                  />
                )}
              />
              {errors?.descriptionContent?.message && (
                <MessageField variant="error">
                  {errors.descriptionContent.message}
                </MessageField>
              )}
            </LabeledField>
          </div>
          <div className="flex flex-col gap-3">
            <LabeledField label="¿Qué van a haber aprendido los estudiantes al finalizar el curso?">
              <Controller
                name="competences"
                control={control}
                render={({ field: { ref, name, onBlur, onChange } }) => (
                  <Tiptap
                    content=""
                    placeholder="Escribe aquí tu texto"
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                  />
                )}
              />
              {errors?.competences?.message && (
                <MessageField variant="error">
                  {errors.competences.message}
                </MessageField>
              )}
            </LabeledField>
          </div>
          <div className="flex flex-col gap-3">
            <LabeledField label="¿Qué requisitos previos debe tener el estudiante o su computadora? Menciónelos si hubiese alguno.">
              <Controller
                name="requirements"
                control={control}
                render={({ field: { ref, name, onBlur, onChange } }) => (
                  <Tiptap
                    content=""
                    placeholder="Escribe aquí tu texto"
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                  />
                )}
              />
              {errors?.requirements?.message && (
                <MessageField variant="error">
                  {errors.requirements.message}
                </MessageField>
              )}
            </LabeledField>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] w-full sm:min-w-[300px]">
          <div>
            <LabeledField label="Idioma del curso:">
              <Controller
                name="langage"
                control={control}
                render={({ field: { ref, name, onBlur, onChange } }) => (
                  <DropDownField
                    options={['español', 'inglés']}
                    placeholder="Seleccionar idioma"
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                  />
                )}
              />
              {errors?.langage?.message && (
                <MessageField variant="error">
                  {errors.langage.message}
                </MessageField>
              )}
            </LabeledField>
          </div>
          <div>
            <LabeledField label="Sector al que va dirigido el curso:">
              <Controller
                name="sector"
                control={control}
                render={({ field: { ref, name, onBlur, onChange } }) => (
                  <DropDownField
                    options={sectorOptions}
                    indexChamp="value"
                    placeholder="Seleccionar sector"
                    component={(elem: unknown) => {
                      const { value } = elem as { id: string; value: string };
                      return <p>{value}</p>;
                    }}
                    name={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                  />
                )}
              />
              {errors?.sector?.message && (
                <MessageField variant="error">
                  {errors.sector.message}
                </MessageField>
              )}
            </LabeledField>
          </div>
          <div>
            <LabeledField
              label="Etiquetas:"
              optionalInfo="Agrega etiquetas que describan los temas, áreas clave o herramientas
            del curso para facilitar su búsqueda y clasificación."
            >
              <Controller
                name="labels"
                control={control}
                render={({ field: { ref, name, onBlur, onChange } }) => (
                  <TagField
                    placeholder="Ej. Automatización, Flujos de trabajo, etc."
                    name={name}
                    onBlur={onBlur}
                    ref={ref}
                    onChange={(newTags) => onChange(newTags)}
                  />
                )}
              />
              {errors?.labels?.message && (
                <MessageField variant="error">
                  {errors.labels.message}
                </MessageField>
              )}
            </LabeledField>
          </div>
        </div>
      </div>
      <div className=" pt-5">
        <div className="pt-5 w-full flex justify-end">
          <Button
            variant="quaternary"
            size="sm"
            type="submit"
            disabled={currentStep === steps.length}
          >
            Continuar
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PublishDetailCoursForm;
