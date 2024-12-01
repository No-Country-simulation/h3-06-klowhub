import Footer from './Footer';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Layout/Footer',
  tags: ['autodocs'],
  component: Footer,
  parameters: {
    layout: 'padded',
    title: 'Footer',
    componentSubtitle: 'The footer component',
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {};
