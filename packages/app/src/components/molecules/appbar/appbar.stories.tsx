import type { Meta, StoryObj } from '@storybook/react';
import AppBar from './Appbar';

const meta = {
  title: 'Nav/AppBar',
  tags: ['autodocs'],
  component: AppBar,
  parameters: {
    layout: 'padded',
    title: 'AppBar',
    componentSubtitle: 'The AppBar component',
  },
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Appbar',
  },
};
