import { Accordion } from '@/components/molecules/Accordion';
import { LabeledField, Tiptap } from '@/components/molecules/FormsMolecules';
import { Field, MessageField } from '@/components/ui';
import Button from '@/components/ui/buttons/BaseButton/BaseButton';
import FileField from '@/components/ui/fields/FileField/FileField';
import VideoField from '@/components/ui/fields/FileField/VideoField';
import { zodResolver } from '@hookform/resolvers/zod';
import { ILesson } from '@shared/types/ILesson';
import { LessonSchema } from '@shared/validation/lessons';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { LuPlus, LuTrash } from 'react-icons/lu';
import * as z from 'zod';

type Inputs = z.infer<typeof LessonSchema>;

export type TLessonFormProps = {
  isOpen?: boolean;
  data?: ILesson;
  onSubmit?: () => void;
};

const LessonForm: FC<TLessonFormProps> = ({
  data,
  // onSubmit,
  isOpen = true,
}) => {
  // const { _id, title, content, moduleId, videoUrl, imageUrl } = data || {};
  const { content, videoUrl, imageUrl } = data || {};

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
    resolver: zodResolver(LessonSchema),
  });
  const professForm: SubmitHandler<Inputs> = async (data) => {
    await trigger(['title', 'content', 'image', 'link', 'video'], {
      shouldFocus: true,
    });
    console.log('formulario enviado', data);
  };

  const titleWatch = watch('title');
  const submitForm = (data: Inputs) => {
    console.log(data);
    professForm(data);
  };

  return (
    <div>
      <Accordion
        reverse
        isOpenOnInit={isOpen}
        rounded
        className="bg-neutral-700"
        bar={
          <Accordion.Bar>
            <div className="flex justify-between w-full">
              <div>
                <span className="font-bold text-xl">Lección 1:</span>
                <span>{titleWatch}</span>
              </div>
              <LuTrash className="w-6 h-6 p-1 rounded-full border border-gray-50 text-gray-50" />
            </div>
          </Accordion.Bar>
        }
      >
        <Accordion.Content className="bg-neutral-700 p-6">
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="flex flex-row w-full gap-8">
              <div className="gap-7 flex flex-col max-w-[380px] md:max-w-[632px]">
                <LabeledField label="Título de la lección">
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
                <LabeledField label="Enlace:">
                  <div className="flex flex-row">
                    <Button
                      rounded="left"
                      variant="outline"
                      size="sm"
                      className="w-auto rounded-l-lg"
                    >
                      Enlace
                    </Button>

                    <Field
                      className="rounded-l-none"
                      fluid
                      {...register('link')}
                    />
                  </div>
                  {errors?.link?.message && (
                    <MessageField variant="error">
                      {errors.link.message}
                    </MessageField>
                  )}
                </LabeledField>
                <div className="flex flex-col md:flex-row gap-3 max-w-[632px]">
                  <div className="w-[237px]">
                    <p className="font-semibold p-4 w-full srhrink-0 text-center">
                      Imagen miniatura
                    </p>
                    <Controller
                      name="image"
                      control={control}
                      render={({ field: { ref, name, onBlur, onChange } }) => (
                        <FileField
                          urlImage={imageUrl || ''}
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
                  <div className="w-[237px] ">
                    <p className="font-semibold shrink-0 p-4 w-full text-center">
                      Video
                    </p>
                    <Controller
                      name="video"
                      control={control}
                      render={({ field: { ref, name, onBlur, onChange } }) => (
                        <VideoField
                          urlVideo={videoUrl || ''}
                          name={name}
                          onChange={onChange}
                          onBlur={onBlur}
                          ref={ref}
                        />
                      )}
                    />
                    {errors?.video?.message && (
                      <MessageField variant="error">
                        {errors.video.message}
                      </MessageField>
                    )}
                  </div>
                </div>
              </div>
              <div className="gap-7 flex flex-col min-w-[380px] w-full">
                <LabeledField label="Descripción.">
                  <Controller
                    name="content"
                    control={control}
                    render={({ field: { ref, name, onBlur, onChange } }) => (
                      <Tiptap
                        content={content || ''}
                        placeholder="Escribe aquí tu texto. Recuerda que no es obligatorio este campo."
                        name={name}
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={ref}
                      />
                    )}
                  />
                  {errors?.content?.message && (
                    <MessageField variant="error">
                      {errors.content.message}
                    </MessageField>
                  )}
                </LabeledField>
                {/* TODO: Pasar a un componente separado"*/}
                <div className="flex flex-col text-sm text-gray-50 gap-3">
                  <p className="font-semibold">Recursos extras</p>
                  <Button
                    variant="outline"
                    className="border-none inline-flex flex-row justify-start text-secondary-200 uppercase pl-0"
                  >
                    <LuPlus className="w-6 h-6" />
                    Adjuntar archivos
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Accordion.Content>
      </Accordion>
    </div>
  );
};

export default LessonForm;
