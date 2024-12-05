import type { Meta, StoryObj } from '@storybook/react';
import NotePicker from './NotePicker';

const meta = {
  title: 'Editor/NotePicker',
  component: NotePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {},
} satisfies Meta<typeof NotePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
