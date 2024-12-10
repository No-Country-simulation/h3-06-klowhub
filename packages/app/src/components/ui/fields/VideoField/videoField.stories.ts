import type { Meta, StoryObj } from '@storybook/react';
import VideoField from './VideoField';

const meta = {
  title: 'Fields/VideoField',
  component: VideoField,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {},
} satisfies Meta<typeof VideoField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    urlVideo: 'https://youtu.be/hP0TcRcr95Q?si=RcCDiPxvcouWCt7-',
    onChange: (file) => {
      console.log(file);
    },
  },
};
