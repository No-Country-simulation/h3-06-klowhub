import type { Meta, StoryObj } from '@storybook/react';
import SubmitButton from './SubmitButton';

const meta = {
  title: 'Buttons/SubmitButton',
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

export const Default: Story = {
  args: {
    children: 'Submit',
  },
};
