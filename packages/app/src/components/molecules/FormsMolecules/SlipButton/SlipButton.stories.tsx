import type { Meta, StoryObj } from '@storybook/react';
import { BsBank } from 'react-icons/bs';
import { GiHealthNormal } from 'react-icons/gi';
import { MdToys } from 'react-icons/md';
import { RiGovernmentLine } from 'react-icons/ri';
import SlipButton from './SlipButton';

const icons = { BsBank, MdToys, RiGovernmentLine, GiHealthNormal };

const meta = {
  title: 'Fields/SlipButton',
  component: SlipButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'SlipButton is a selector component that combines an input field with a toggle button to display or hide suggestions. It is designed for use in dropdowns and suggestion selectors. This component provides customization options, including custom CSS classes, icons, and alternate text.',
      },
    },
  },
  args: {
    toggle: () => console.log('Toggled!'),
  },
  argTypes: {
    placeholder: {
      description: 'Placeholder text for the SlipButton input field.',
      control: {
        type: 'text',
      },
    },
    value: {
      description: 'Value for the SlipButton input field.',
      control: {
        type: 'text',
      },
    },
    isOpened: {
      description:
        'A boolean indicating whether the dropdown is open or closed.',
      control: {
        type: 'boolean',
      },
    },
    className: {
      description: 'Custom CSS classes for styling the SlipButton component.',
      control: {
        type: 'text',
      },
    },
    alt: {
      description: 'Alternate text for the component.',
      control: {
        type: 'text',
      },
    },
    icon: {
      description: 'The icon to display in the SlipButton',
      options: Object.keys(icons), // An array of serializable values
      mapping: icons, // Maps serializable option values to complex arg values
      control: {
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          Bank: 'BsBank',
          Toys: 'MdToys',
          Government: 'RiGovernmentLine',
          Health: 'GiHealthNormal',
        },
      },
    },
    inputStyles: {
      description: 'The styles to apply at the input of the button.',
      control: {
        type: 'text',
      },
    },
    // You can add more ArgTypes as needed for additional props.
  },
} satisfies Meta<typeof SlipButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY

export const Default: Story = {
  args: {
    isOpened: false,
    placeholder: 'Categoría',
    value: 'Normal',
    children: 'Suggestion List here',
  },
};

export const WithIcon: Story = {
  args: {
    isOpened: true,
    placeholder: 'Categoría',
    value: 'Banco',
    icon: <BsBank />,
    alt: 'Categoría Banco',
    children: 'Suggestion List here',
  },
};
