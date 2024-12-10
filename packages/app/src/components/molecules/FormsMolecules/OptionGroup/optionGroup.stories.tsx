import AppSheetLogo from '@/assets/appSheetLogo.svg';
import PowerAppLogo from '@/assets/powerAppLogo.svg';
import { Tag } from '@/components/ui';
import type { Meta, StoryObj } from '@storybook/react';
import OptionGroup from './OptionGroup';

const meta = {
  title: 'Fields/OptionGroup',
  tags: ['autodocs'],
  component: OptionGroup,
  parameters: {
    layout: 'padded',
    title: 'OptionGroup Buttons',
    componentSubtitle:
      'The `OptionGroup` component is a versatile React OptionGroup component that can be customized with various variants and sizes.',
  },
  argTypes: {},
} satisfies Meta<typeof OptionGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Competencia: Story = {
  args: {
    register: { name: 'competenceLevel' },
    title: 'Nivel de Competencia',
    options: [
      { label: 'Basico', value: 'basico' },
      { label: 'Intermedio', value: 'intermedio' },
      { label: 'Avanzado', value: 'avanzado' },
    ],
  },
};

export const Pago: Story = {
  args: {
    register: { name: 'accessMode' },
    title: 'Acceso al curso:',
    options: [
      { label: 'Gratuito', value: 'gratuito' },
      { label: 'Pago', value: 'pago' },
    ],
  },
};

export const Plataforma: Story = {
  args: {
    register: { name: 'platform' },
    title: 'Plataforma',
    options: [
      {
        label: (
          <Tag icon={<img src={AppSheetLogo.src} alt="AppSheet Logo" />}>
            AppSheet
          </Tag>
        ),
        value: 'AppSheet',
      },
      {
        label: (
          <Tag icon={<img src={PowerAppLogo.src} alt="PowerApp Logo" />}>
            AppSheet
          </Tag>
        ),
        value: 'PowerApp',
      },
    ],
  },
};
