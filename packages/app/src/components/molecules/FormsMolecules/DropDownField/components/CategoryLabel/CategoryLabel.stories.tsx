import type { Meta, StoryObj } from '@storybook/react';
import { MdOutlineHealthAndSafety, MdOutlineToys } from 'react-icons/md';
import { RiBankFill, RiGovernmentLine } from 'react-icons/ri';
import CategoryLabel from './CategoryLabel';

const icons = {
  MdOutlineToys,
  RiBankFill,
  RiGovernmentLine,
  MdOutlineHealthAndSafety,
};

const meta = {
  title: 'General/CategoryLabel',
  component: CategoryLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'The CategoryLabel component is used to display an icon along with associated text. It allows you to customize the icon, text, alt text, and size of the label.',
      },
    },
  },
  argTypes: {
    icon: {
      description:
        'The icon to be displayed. You can provide a ComponentType, string, or ReactElement.',
      options: Object.keys(icons), // An array of serializable values
      mapping: icons, // Maps serializable option values to complex arg values
      control: {
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          Bank: 'BankOutline',
          Toys: 'ToysOutline',
          Government: 'GovernmentOutline',
          Health: 'HealthOutline',
        },
      },
    },
    text: {
      control: {
        type: 'text',
      },
      description: 'The text to be displayed alongside the icon.',
    },
    alt: {
      control: {
        type: 'text',
      },
      description: 'The alternative text for the icon image (optional).',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'normal', 'big'],
      },
      description:
        'The size of the CategoryLabel, which affects both the text and the icon size.',
    },
  },
} satisfies Meta<typeof CategoryLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Default: Story = {
  args: {
    text: 'Banco',
    icon: RiBankFill,
  },
};
