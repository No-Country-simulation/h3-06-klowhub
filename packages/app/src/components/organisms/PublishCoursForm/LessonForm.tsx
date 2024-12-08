import { Accordion } from '@/components/molecules/Accordion';
import { LabeledField } from '@/components/molecules/FormsMolecules';
import Tiptap from '@/components/molecules/FormsMolecules/Editor/components/TipTap';
import { Field } from '@/components/ui';
import Button from '@/components/ui/buttons/BaseButton/BaseButton';
import FileField from '@/components/ui/fields/FileField/FileField';
import { ILesson } from '@shared/types/ILesson';
import { FC } from 'react';
import { LuPlus, LuTrash } from 'react-icons/lu';

export type TLessonFormProps = {
  isOpen?: boolean;
  data?: ILesson;
  onSubmit?: () => void;
};

const LessonForm: FC<TLessonFormProps> = ({
  data,
  onSubmit,
  isOpen = true,
}) => {
  const { _id, title, content, moduleId, videoUrl } = data || {};
  const submitLesson = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit?.();
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
                {data && <span className={title}>{title}</span>}
              </div>
              <LuTrash className="w-6 h-6 p-1 rounded-full border border-gray-50 text-gray-50" />
            </div>
          </Accordion.Bar>
        }
      >
        <Accordion.Content className="bg-neutral-700 p-6">
          <form onSubmit={submitLesson}>
            <div className="flex flex-row w-full gap-8">
              <div className="gap-7 flex flex-col max-w-[380px] md:max-w-[632px]">
                <LabeledField label="Título del módulo">
                  <Field placeholder="Ej: introducción" fluid />
                </LabeledField>
                <LabeledField label="Contenido del módulo">
                  <div className="flex flex-row">
                    <Button
                      rounded="left"
                      variant="outline"
                      size="sm"
                      className="w-auto rounded-l-lg"
                    >
                      Enlace
                    </Button>

                    <Field className="rounded-l-none" fluid />
                  </div>
                </LabeledField>
                <div className="flex flex-col md:flex-row gap-3">
                  <div>
                    <p className="font-semibold p-4 w-full text-center">
                      Imagen miniatura
                    </p>
                    <FileField
                      className="w-[312px]"
                      photo=""
                      onChange={() => {}}
                    />
                  </div>
                  <div>
                    <p className="font-semibold p-4 w-full text-center">
                      Video
                    </p>
                    <FileField
                      className="w-[312px]"
                      photo=""
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </div>
              <div className="gap-7 flex flex-col min-w-[380px] w-full">
                <LabeledField label="Descripción.">
                  <Tiptap
                    content={content || ''}
                    onChange={() => {}}
                    placeholder="Escribe aquí tu texto. Recuerda que no es obligatorio este campo."
                  />
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
