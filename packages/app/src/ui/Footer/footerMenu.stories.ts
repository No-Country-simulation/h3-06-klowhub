import FooterMenu from './FooterMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Layout/FooterMenu',
  tags: ['autodocs'],
  component: FooterMenu,
  parameters: {
    layout: 'padded',
    title: 'Footer Menu',
    componentSubtitle: 'The footer menu component',
  },
} satisfies Meta<typeof FooterMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: {
    title: 'Footer Menu',
    options: ['option1', 'option2', 'option3', 'option4'],
  },
};
