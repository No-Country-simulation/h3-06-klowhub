import type { Meta, StoryObj } from '@storybook/react';
import LabeledField from './LabeledField';

const meta = {
  title: 'Fields/LabeledField',
  tags: ['autodocs'],
  component: LabeledField,
  parameters: {
    layout: 'padded',
    title: 'LabeledField Buttons',
    componentSubtitle:
      'The `LabeledField` component is a versatile React LabeledField component that can be customized with various variants and sizes.',
  },
  argTypes: {},
} satisfies Meta<typeof LabeledField>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Titulo: Story = {
  args: {
    label: 'Titulo del curso:',
    optionalInfo: 'Máximo 70 caracteres',
    type: 'text',
    placeholder: 'Ej: Aprende a desarrollar aplicaciones con AppSheet',
  },
};

export const Hours: Story = {
  args: {
    label: 'Duración del curso:',
    type: 'number',
    optionalInfo: 'Escribe la cantidad de horas.',
    placeholder: 'Ej: 12',
  },
};
