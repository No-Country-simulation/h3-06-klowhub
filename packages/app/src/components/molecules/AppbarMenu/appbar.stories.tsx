import type { Meta, StoryObj } from '@storybook/react';
import AppBar from './AppbarMenu';

const meta = {
  title: 'Nav/AppBar',
  tags: ['autodocs'],
  component: AppBar,
  parameters: {
    title: 'AppBar',
    componentSubtitle: 'The AppBar component',
  },
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-screen">
      <AppBar />
    </div>
  ),
};
