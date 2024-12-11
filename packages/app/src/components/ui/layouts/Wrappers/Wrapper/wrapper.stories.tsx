import type { Meta, StoryObj } from '@storybook/react';
import Wrapper from './Wrapper';

const meta = {
  title: 'Layout/Wrapper',
  component: Wrapper,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {},
} satisfies Meta<typeof Wrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Wrapper', children: <p>Children</p> },
};
