import type { Meta, StoryObj } from '@storybook/react';
import PublishCoursGeneral from './PublishCoursGeneral';

const meta = {
  title: 'Forms/PublishCoursGeneral',
  component: PublishCoursGeneral,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {},
} satisfies Meta<typeof PublishCoursGeneral>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
