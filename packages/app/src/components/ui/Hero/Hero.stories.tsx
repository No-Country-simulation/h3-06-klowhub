import type { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';

const meta = {
  title: 'Layouts/Hero',
  tags: ['autodocs'],
  component: Hero,
  parameters: {
    title: 'Hero',
    componentSubtitle: 'The Hero component',
  },
  argTypes: {},
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: '/assets/hero.png',
    children: <h1>Hero</h1>,
  },
};
