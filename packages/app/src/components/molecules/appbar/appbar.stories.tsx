import type { Meta, StoryObj } from '@storybook/react';
import AppBar from './appbar';

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

export const NotAuthenticated: Story = {
  args: {},
};
