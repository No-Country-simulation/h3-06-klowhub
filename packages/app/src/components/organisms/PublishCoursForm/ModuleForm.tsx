import { Accordion } from '@/components/molecules/Accordion';
import { LabeledField, Tiptap } from '@/components/molecules/FormsMolecules';

import { Field, MessageField } from '@/components/ui';
import Button from '@/components/ui/buttons/BaseButton/BaseButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { ILesson } from '@shared/types/ILesson';
import { IModule } from '@shared/types/IModule';
import { ModuleSchema } from '@shared/validation/module';
import { FC, FormEvent, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { LuPlus, LuTrash } from 'react-icons/lu';
import * as z from 'zod';
import LessonForm from './LessonForm';
type Inputs = z.infer<typeof ModuleSchema>;
export type TModuleFormProps = {
  isOpen?: boolean;
  data?: IModule;
};

const ModuleForm: FC<TModuleFormProps> = ({ data, isOpen = true }) => {
  const { _id: title, description, lessons } = data ?? {};
  const [moduleLessons, setModuleLessons] = useState<ILesson[]>(lessons || []);
  // const [newLesson, setNewLesson] = useState<ILesson[]>(lessons || []);

  const {
    register,
    handleSubmit,
    watch,
    control,
    trigger,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {},
    mode: 'onChange',
    resolver: zodResolver(ModuleSchema),
  });

  const professForm: SubmitHandler<Inputs> = async (data) => {
    await trigger(['title', 'description'], {
      shouldFocus: true,
    });
    if (moduleLessons.length === 0) return;
    console.log('formulario enviado', data);
  };

  const moduletitle = watch('title');

  const submitForm = (data: Inputs) => {
    console.log(data);
    professForm(data);
  };

  const handleAddLesson = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // guarda el nuevo modulo si no lo guardo.
    setModuleLessons([...moduleLessons]);
  };

  return (
    <div>
      <Accordion
        reverse
        isOpenOnInit={isOpen}
        rounded
        className="bg-gray-950"
        bar={
          <Accordion.Bar>
            <div className="flex justify-between w-full">
              <div>
                <span className="font-bold text-xl">
                  Modulo 1:{moduletitle}
                </span>
                {title && <span className={title}>{title}</span>}
              </div>
              <LuTrash className="w-6 h-6 p-1 rounded-full border border-gray-50 text-gray-50" />
            </div>
          </Accordion.Bar>
        }
      >
        <Accordion.Content className="bg-gray-950 p-6 ">
          <div className="flex flex-col gap-6">
            <form
              onSubmit={handleSubmit(submitForm)}
              className="flex flex-row w-full gap-8 justify-around"
            >
              <div className="gap-7 flex flex-col max-w-[380px] md:max-w-[632px] w-full md:w-1/2">
                <LabeledField label="Título del módulo">
                  <Field
                    placeholder="Ej: introducción"
                    fluid
                    {...register('title')}
                  />
                  {errors?.title?.message && (
                    <MessageField variant="error">
                      {errors.title.message}
                    </MessageField>
                  )}
                </LabeledField>
              </div>
              <div className="gap-7 flex flex-col min-w-[380px] w-full md:w-1/2 ">
                <LabeledField label="Descripción.">
                  <Controller
                    name="description"
                    control={control}
                    render={({ field: { ref, name, onBlur, onChange } }) => (
                      <Tiptap
                        content={description || ''}
                        placeholder="Escribe aquí tu texto. Recuerda que no es obligatorio este campo."
                        name={name}
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={ref}
                      />
                    )}
                  />
                  {errors?.description?.message && (
                    <MessageField variant="error">
                      {errors.description.message}
                    </MessageField>
                  )}
                </LabeledField>
              </div>
            </form>
            <div className="flex flex-col gap-6">
              {moduleLessons.length !== 0 &&
                moduleLessons.map((lesson, index) => (
                  <LessonForm key={index} data={lesson} isOpen={false} />
                ))}
            </div>

            <LessonForm onSubmit={() => handleAddLesson} isOpen={true} />

            <div className="bg-neutral-700 p-6 rounded-lg">
              <Button
                type="button"
                onClick={() => handleAddLesson}
                variant="outline"
                size="xs"
                className="border-primary-lavander-200 text-primary-lavander-200"
              >
                <LuPlus className="w-5 h-5" /> Agregar Lección
              </Button>
            </div>
          </div>
        </Accordion.Content>
      </Accordion>
    </div>
  );
};

export default ModuleForm;
