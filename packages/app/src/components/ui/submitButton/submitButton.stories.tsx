import SubmitButton from './SubmitButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Button/SubmitButton',
  tags: ['autodocs'],
  component: SubmitButton,
  parameters: {
    layout: 'padded',
    title: 'SubmitButton',
    componentSubtitle: 'The SubmitButton component',
  },
} satisfies Meta<typeof SubmitButton>;

export default meta;
type Story = StoryObj<typeof meta>;
