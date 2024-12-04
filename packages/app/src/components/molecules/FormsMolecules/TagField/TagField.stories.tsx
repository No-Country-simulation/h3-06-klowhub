import type { Meta, StoryObj } from '@storybook/react';
import TagField from './TagField';

const meta = {
  title: 'Fields/TagField',
  component: TagField,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'TagField is a component designed for adding tags with auto-suggestions. It provides a user-friendly interface for adding and managing tags, along with error handling. This component supports customization options, including custom CSS classes and suggestions. It uses useTagField hook',
      },
    },
  },
  args: {
    placeholder: 'Placeholder text for the TagField input field.',
  },
  argTypes: {
    className: {
      description: 'Custom CSS classes for styling the TagField component.',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof TagField>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Default: Story = {
  args: {},
};
