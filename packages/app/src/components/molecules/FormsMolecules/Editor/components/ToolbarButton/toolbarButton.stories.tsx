import type { Meta, StoryObj } from '@storybook/react';
import ToolbarButton from './ToolbarButton';

const meta = {
  title: 'Editor/ToolbarButton',
  component: ToolbarButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {},
} satisfies Meta<typeof ToolbarButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
