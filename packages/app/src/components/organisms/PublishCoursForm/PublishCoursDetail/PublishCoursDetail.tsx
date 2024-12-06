import {
  DropDownField,
  LabeledField,
  TagField,
} from '@/components/molecules/FormsMolecules';
import Tiptap from '@/components/molecules/FormsMolecules/Editor/components/TipTap';
import { Wrapper } from '@/components/ui';
import sectorOptions from '@shared/data/sectorOptions.json';

const PublishDetailCoursForm = () => {
  return (
    <Wrapper className="flex sm:flex-row gap-[30px] flex-col max-w-[1500px]">
      <div className="flex flex-col gap-[30px] w-full sm:flex-grow-2">
        <div className="flex flex-col gap-3">
          <LabeledField
            label=" Haz una descripción detallada del contenido del curso y a quién está
            dirigido."
          >
            <Tiptap
              content={''}
              onChange={() => {}}
              placeholder="Escribe aquí tu texto"
            />
          </LabeledField>
        </div>
        <div className="flex flex-col gap-3">
          <LabeledField label="¿Qué van a haber aprendido los estudiantes al finalizar el curso?">
            <Tiptap
              content={''}
              onChange={() => {}}
              placeholder="Escribe aquí tu texto"
            />
          </LabeledField>
        </div>
        <div className="flex flex-col gap-3">
          <LabeledField label="¿Qué requisitos previos debe tener el estudiante o su computadora? Menciónelos si hubiese alguno.">
            <Tiptap
              content={''}
              onChange={() => {}}
              placeholder="Escribe aquí tu texto"
            />
          </LabeledField>
        </div>
      </div>
      <div className="flex flex-col gap-[30px] w-full sm:min-w-[300px]">
        <div>
          <LabeledField label="Idioma del curso:">
            <DropDownField
              options={['español', 'inglés']}
              placeholder="Seleccionar idioma"
            />
          </LabeledField>
        </div>
        <div>
          <LabeledField label="Sector al que va dirigido el curso:">
            <DropDownField
              options={sectorOptions}
              indexChamp="value"
              placeholder="Seleccionar sector"
              component={(elem: unknown) => {
                const { value } = elem as { id: string; value: string };
                return <p>{value}</p>;
              }}
            />
          </LabeledField>
        </div>
        <div>
          <LabeledField
            label="Etiquetas:"
            optionalInfo="Agrega etiquetas que describan los temas, áreas clave o herramientas
            del curso para facilitar su búsqueda y clasificación."
          >
            <TagField placeholder="Ej. Automatización, Flujos de trabajo, etc." />
          </LabeledField>
        </div>
      </div>
    </Wrapper>
  );
};

export default PublishDetailCoursForm;
