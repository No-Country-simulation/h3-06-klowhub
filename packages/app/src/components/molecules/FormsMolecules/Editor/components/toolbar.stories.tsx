import type { Meta, StoryObj } from '@storybook/react';
import Toolbar from './Toolbar';

const meta = {
  title: 'Editor/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {},
} satisfies Meta<typeof Toolbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    editor: null,
    content: '',
  },
};
