import type { Meta, StoryObj } from '@storybook/react';
import MessageField from './MessageField';

const meta = {
  title: 'Fields/MessageField',
  component: MessageField,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      description: 'The colors of the Message',
      control: 'radio',
      options: ['default', 'error', 'success'],
    },
  },
} satisfies Meta<typeof MessageField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default Message',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error Message',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Message',
  },
};
