import MenuItem from './MenuItem';
import type { Meta, StoryObj } from '@storybook/react';
import { FaRegCopyright } from 'react-icons/fa';

const meta = {
  title: 'Layout/MenuItem',
  tags: ['autodocs'],
  component: MenuItem,
  parameters: {
    layout: 'padded',
    title: 'MenuItem',
    componentSubtitle: 'The footer menu item component',
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: {
    text: 'Menu Item',
  },
};

export const WithIcon: Story = {
  args: {
    text: 'Menu Item',
    icon: <FaRegCopyright />,
  },
};
