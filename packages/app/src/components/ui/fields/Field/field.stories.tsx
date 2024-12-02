import Field from './Field';
import type { Meta, StoryObj } from '@storybook/react';
import { RiEyeLine } from 'react-icons/ri';

const meta = {
  title: 'Fields/Field',
  tags: ['autodocs'],
  component: Field,
  parameters: {
    title: 'Field',
    componentSubtitle: 'The Field component',
  },
  argTypes: {
    colorState: {
      description: 'The colors of the buttons',
      control: 'radio',
      options: ['default', 'error', 'success'],
    },
    fluid: {
      description: 'The different sizes',
      control: 'boolean',
    },
    reverse: {
      description: 'The different sizes',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    fluid: false,
    reverse: false,
    colorState: 'default',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Placeholder',
    fluid: false,
    reverse: false,
    colorState: 'error',
  },
};

export const Success: Story = {
  args: {
    placeholder: 'Placeholder',
    fluid: false,
    reverse: false,
    colorState: 'success',
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: 'Placeholder',
    fluid: false,
    reverse: false,
    colorState: 'success',
    children: (
      <span className="p-3">
        <RiEyeLine />
      </span>
    ),
  },
};

export const WithIconReverse: Story = {
  args: {
    placeholder: 'Placeholder',
    fluid: false,
    reverse: true,
    colorState: 'success',
    children: (
      <span className="p-3">
        <RiEyeLine />
      </span>
    ),
  },
};

export const Fluid: Story = {
  args: {
    ...WithIcon.args,
    placeholder: 'Placeholder',
    fluid: true,
  },
};
