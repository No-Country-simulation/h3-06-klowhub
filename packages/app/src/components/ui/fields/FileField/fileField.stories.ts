import type { Meta, StoryObj } from '@storybook/react';
import FileUploader from './FileField';

const meta = {
  title: 'Image/FileUploader',
  component: FileUploader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {},
} satisfies Meta<typeof FileUploader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    photo: 'https://dummyjson.com/image/400x200/282828',
    onChange: (file) => {
      console.log(file);
    },
  },
};
