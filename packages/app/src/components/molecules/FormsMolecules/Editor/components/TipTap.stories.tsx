import type { Meta, StoryObj } from '@storybook/react';
import TipTap from './TipTap';

const meta = {
  title: 'Editor/TipTap',
  component: TipTap,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {},
} satisfies Meta<typeof TipTap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: '',
    onChange: () => {},
  },
};
