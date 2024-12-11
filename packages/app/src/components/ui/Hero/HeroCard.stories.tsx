import type { Meta, StoryObj } from '@storybook/react';
import HeroCard from './HeroCard';

const meta = {
  title: 'Layouts/HeroCard',
  tags: ['autodocs'],
  component: HeroCard,
  parameters: {
    title: 'HeroCard',
    componentSubtitle: 'The HeroCard component',
  },
  argTypes: {},
} satisfies Meta<typeof HeroCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'This is a hero card',
    children: 'Here is the description',
  },
};
