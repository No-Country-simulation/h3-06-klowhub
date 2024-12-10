'use client';
import AppSheetLogo from '@/assets/appSheetLogo.svg';
import PowerAppLogo from '@/assets/powerAppLogo.svg';
import {
  LabeledField,
  OptionGroup,
  TextArea,
} from '@/components/molecules/FormsMolecules';
import {
  BaseButton as Button,
  Field,
  FileField,
  MessageField,
  Tag,
} from '@/components/ui';
import { useStepStore } from '@/stores/stepStore.store';
import { zodResolver } from '@hookform/resolvers/zod';
import { CourseSchema } from '@shared/validation/cours';
import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';

type Inputs = z.infer<typeof CourseSchema>;

const PublishCoursGeneral = () => {
  // Calling Global multiform step store
  const { currentStep, nextStep, steps, loadSteps, updateStepState } =
    useStepStore((state) => state);

  const {
    register,
    handleSubmit,
    watch,
    control,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      access: 'free',
      level: 'basic',
      platform: 'appsheet',
    },
    mode: 'onChange',
    resolver: zodResolver(CourseSchema),
  });

  useEffect(() => {
    useStepStore.persist.rehydrate();
    loadSteps(steps);
  }, []);

  const professForm: SubmitHandler<Inputs> = async (data) => {
    await trigger(
      [
        'title',
        'description',
        'access',
        'price',
        'level',
        'image',
        'duration',
        'platform',
      ],
      {
        shouldFocus: true,
      },
    );
    console.log('formulario enviado', data);

    updateStepState({ state: 'VALID' });
    nextStep();
  };

  const access = watch('access');

  const submitForm = (data: Inputs) => {
    console.log(data);
    professForm(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="w-full max-w-[1500px] my-0 mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between w-full text-white bg-gray-950 rounded-lg p-6 shadow-md ">
          <div className="flex flex-col w-full gap-6">
            <LabeledField
              label="Titulo del curso:"
              optionalInfo="Máximo 70 caracteres"
            >
              <Field
                {...register('title')}
                placeholder="Ej: Aprende a desarrollar aplicaciones con AppSheet"
                type="text"
                className="max-w-[700px]"
              />
              {errors?.title?.message && (
                <MessageField variant="error">
                  {errors.title.message}
                </MessageField>
              )}
            </LabeledField>

            <div className="flex flex-col w-full gap-3">
              <TextArea
                label="Descripción del curso:"
                maxLength={180}
                rows={3}
                optionalInfo="Escribe una breve descripción de qué se trata. Máximo 180 caracteres."
                placeholder="Ej.: Aprende a crear flujos de trabajo automatizados en AppSheet, optimizando la gestión de tareas y aprobaciones, lo que mejorará la productividad en tus proyectos."
                className="max-w-[700px]"
                register={register('description')}
              />
              {errors?.description?.message && (
                <MessageField variant="error">
                  {errors.description.message}
                </MessageField>
              )}
            </div>
          </div>

          <div className="flex flex-col text-sm text-gray-50 gap-3 max-w-[507px]">
            <p className="font-semibold">Imagen de portada:</p>
            <p className="font-normal">
              Se recomienda que la imagen sea representativa del curso y
              atractiva para que capte la atención de posibles estudiantes.
            </p>
            <Controller
              name="image"
              control={control}
              render={({ field: { ref, name, onBlur, onChange } }) => (
                <FileField
                  urlImage=""
                  name={name}
                  onChange={onChange}
                  onBlur={onBlur}
                  ref={ref}
                />
              )}
            />

            {errors?.image?.message && (
              <MessageField variant="error">
                {errors.image.message}
              </MessageField>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row n w-full text-white bg-gray-950 rounded-lg p-6 shadow-md  flex-wrap gap-7 md:gap-4 justify-between">
          <div className="flex flex-col gap-6">
            <OptionGroup
              title="Acceso al curso:"
              className=" md:max-w-[700px]"
              options={[
                { value: 'free', label: 'Grauito' },
                { value: 'premiun', label: 'Pago' },
              ]}
              register={register('access')}
            />{' '}
            {errors?.access?.message && (
              <MessageField variant="error">
                {errors.access.message}
              </MessageField>
            )}
            {access === 'premiun' && (
              <LabeledField
                label="Precio:"
                optionalInfo="Escribe el valor en pesos argentinos"
              >
                <Field
                  placeholder="Ej: 10000"
                  type="number"
                  className="max-w-[266px]"
                  {...register('price')}
                />
                {errors?.price?.message && (
                  <MessageField variant="error">
                    {errors.price.message}
                  </MessageField>
                )}
              </LabeledField>
            )}
          </div>

          <OptionGroup
            title="Nivel de competencia:"
            className="md:max-w-[700px]"
            options={[
              { value: 'basic', label: 'Básico' },
              { value: 'intermediate', label: 'Intermedio' },
              { value: 'advanced', label: 'Avanzado' },
            ]}
            register={register('level')}
          />
          {errors?.level?.message && (
            <MessageField variant="error">{errors.level.message}</MessageField>
          )}
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
            register={register('platform')}
          />
          {errors?.platform?.message && (
            <MessageField variant="error">
              {errors.platform.message}
            </MessageField>
          )}
          <LabeledField
            label="Duración del curso:"
            optionalInfo="Escribe la cantidad en horas."
          >
            <Field
              placeholder="Ej: 12"
              type="number"
              className="max-w-[266px]"
              {...register('duration')}
            />
            {errors?.duration?.message && (
              <MessageField variant="error">
                {errors.duration.message}
              </MessageField>
            )}
          </LabeledField>
        </div>
      </div>

      {/* navigation */}
      <div className="">
        <div className="mt-8 w-full flex justify-end">
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

export default PublishCoursGeneral;
