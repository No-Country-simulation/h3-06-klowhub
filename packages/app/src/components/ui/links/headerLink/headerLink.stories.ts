import HeaderLink from './HeaderLink';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Nav/HeaderLink',
  tags: ['autodocs'],
  component: HeaderLink,
  parameters: {
    layout: 'padded',
    title: 'HeaderLink',
    componentSubtitle: 'The HeaderLink component',
  },
} satisfies Meta<typeof HeaderLink>;

export default meta;
type Story = StoryObj<typeof meta>;
