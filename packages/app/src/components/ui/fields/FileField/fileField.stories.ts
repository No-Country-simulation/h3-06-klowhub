import type { Meta, StoryObj } from '@storybook/react';
import FileField from './FileField';

const meta = {
  title: 'Field/FileField',
  component: FileField,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {},
} satisfies Meta<typeof FileField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    urlImage: 'https://dummyjson.com/image/400x200/282828',
    onChange: (file) => {
      console.log(file);
    },
  },
};
