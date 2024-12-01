import Input from './Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Fields/Input',
  tags: ['autodocs'],
  component: Input,
  parameters: {
    layout: 'padded',
    title: 'Input',
    componentSubtitle: 'The Input component',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};
export const Fluid: Story = {
  args: {
    placeholder: 'Placeholder',
    fluid: true,
  },
};
