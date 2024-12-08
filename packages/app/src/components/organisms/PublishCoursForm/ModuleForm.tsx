import { Accordion } from '@/components/molecules/Accordion';
import { LabeledField } from '@/components/molecules/FormsMolecules';
import Tiptap from '@/components/molecules/FormsMolecules/Editor/components/TipTap';
import { Field } from '@/components/ui';
import Button from '@/components/ui/buttons/BaseButton/BaseButton';
import { ILesson } from '@shared/types/ILesson';
import { IModule } from '@shared/types/IModule';
import { FC, FormEvent, useState } from 'react';
import { LuPlus, LuTrash } from 'react-icons/lu';
import LessonForm from './LessonForm';

export type TModuleFormProps = {
  isOpen?: boolean;
  data?: IModule;
};

const ModuleForm: FC<TModuleFormProps> = ({ data, isOpen = true }) => {
  const { _id: courseId, title, description, lessons } = data ?? {};
  const [moduleLessons, setModuleLessons] = useState<ILesson[]>(lessons || []);
  const [newLesson, setNewLesson] = useState<ILesson[]>(lessons || []);

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
                <span className="font-bold text-xl">Modulo 1:</span>
                {title && <span className={title}>{title}</span>}
              </div>
              <LuTrash className="w-6 h-6 p-1 rounded-full border border-gray-50 text-gray-50" />
            </div>
          </Accordion.Bar>
        }
      >
        <Accordion.Content className="bg-gray-950 p-6 ">
          <div className="flex flex-col gap-6">
            <form className="flex flex-row w-full gap-8 justify-around">
              <div className="gap-7 flex flex-col max-w-[380px] md:max-w-[632px] w-full md:w-1/2">
                <LabeledField label="Título del módulo">
                  <Field placeholder="Ej: introducción" fluid />
                </LabeledField>
              </div>
              <div className="gap-7 flex flex-col min-w-[380px] w-full md:w-1/2 ">
                <LabeledField label="Descripción.">
                  <Tiptap
                    content={description || ''}
                    onChange={() => {}}
                    placeholder="Escribe aquí tu texto. Recuerda que no es obligatorio este campo."
                  />
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
