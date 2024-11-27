import Logo from './Logo';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Miscelaneous/Logo',
  tags: ['autodocs'],
  component: Logo,
  parameters: {
    layout: 'padded',
    title: 'Logo',
    componentSubtitle: 'The Logo component',
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: {
    size: 'text-4xl',
    color: 'text-white',
  },
};
