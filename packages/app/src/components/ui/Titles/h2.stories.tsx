import type { Meta, StoryObj } from '@storybook/react';
import H2 from './H2';

const meta = {
  title: 'Nav/H2',
  tags: ['autodocs'],
  component: H2,
  parameters: {
    layout: 'padded',
    title: 'H2',
    componentSubtitle: 'The H2 component',
  },
} satisfies Meta<typeof H2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Heading level 2',
  },
};
