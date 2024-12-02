import type { Meta, StoryObj } from '@storybook/react';
import CheckField from './CheckField';

const meta = {
  title: 'Fields/CheckField',
  tags: ['autodocs'],
  component: CheckField,
  parameters: {
    title: 'CheckField',
    componentSubtitle: 'The CheckField component',
  },
  argTypes: {},
} satisfies Meta<typeof CheckField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
