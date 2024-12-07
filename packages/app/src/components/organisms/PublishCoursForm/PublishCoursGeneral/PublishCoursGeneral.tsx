import AppSheetLogo from '@/assets/appSheetLogo.svg';
import PowerAppLogo from '@/assets/powerAppLogo.svg';
import {
  LabeledField,
  OptionGroup,
  TextArea,
} from '@/components/molecules/FormsMolecules';
import { Field, Tag } from '@/components/ui';
import FileField from '@/components/ui/fields/FileField/FileField';
import { FC } from 'react';

export type TPublishCoursGeneralProps = {
  handleNext?: () => void;
};
const PublishCoursGeneral: FC<TPublishCoursGeneralProps> = ({ handleNext }) => {
  return (
    <>
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
                padding={false}
                placeholder="Ej: 10000"
                type="number"
                className="max-w-[266px]"
              />
            </LabeledField>
          </div>
          <OptionGroup
            title="Acceso al curso:"
            className="md:max-w-[700px]"
            options={[
              { value: 'Gratuito', label: 'Gratuito' },
              { value: 'Pago', label: 'Pago' },
            ]}
            name="precio"
          />
          <OptionGroup
            title="Nivel de competencia:"
            className="md:max-w-[700px]"
            options={[
              { value: 'Basico', label: 'Básico' },
              { value: 'Intermedio', label: 'Intermedio' },
              { value: 'Avanzado', label: 'Avanzado' },
            ]}
            name="precio"
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
            name="precio"
          />
          <LabeledField
            label="Duración del curso:"
            optionalInfo="Escribe la cantidad en horas."
          >
            <Field
              padding={false}
              placeholder="Ej: 12"
              type="number"
              className="max-w-[266px]"
            ></Field>
          </LabeledField>
        </div>
      </form>
    </>
  );
};

export default PublishCoursGeneral;
