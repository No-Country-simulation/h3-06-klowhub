import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextArea';

const meta = {
  title: 'Fields/TextArea',
  tags: ['autodocs'],
  component: TextArea,
  parameters: {
    background: 'light',
    layout: 'padded',
    title: 'TextArea Buttons',
    componentSubtitle:
      'The `TextArea` component is a versatile React TextArea component that can be customized with various variants and sizes.',
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: {
    register: { name: 'description' },
    label: 'Descripción del curso:',
    optionalInfo:
      'Escribe una breve descripción de qué se trata. Máximo 180 caracteres',
    maxLength: 180,
    placeholder:
      'Ej.: Aprende a crear flujos de trabajo automatizados en AppSheet, optimizando la gestión de tareas y aprobaciones, lo que mejorará la productividad en tus proyectos.',
    rows: 3,
  },
};
