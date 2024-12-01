import InputText from './InputText';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Fields/InputText',
  tags: ['autodocs'],
  component: InputText,
  parameters: {
    layout: 'padded',
    title: 'InputText',
    componentSubtitle: 'The InputText component',
  },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;
