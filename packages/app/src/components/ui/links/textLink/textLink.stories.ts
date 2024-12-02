import type { Meta, StoryObj } from '@storybook/react';
import TextLink from './TextLink';

const meta = {
  title: 'Nav/TextLink',
  tags: ['autodocs'],
  component: TextLink,
  parameters: {
    layout: 'padded',
    title: 'TextLink',
    componentSubtitle: 'The TextLink component',
    argsTypes: {
      variant: {
        description: 'The colors of the buttons',
        control: 'radio',
        options: ['default', 'secondary'],
      },
      size: {
        description: 'The different sizes',
        control: 'radio',
        options: ['sm', 'base'],
      },
    },
  },
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Link',
    href: '#',
    variant: 'default',
    size: 'base',
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    variant: 'primary',
    children: 'Primary Link',
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: 'secondary',
    children: 'Secondary Link',
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    variant: 'secondary',
    children: 'Small Link',
    size: 'sm',
  },
};
