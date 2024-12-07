import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

const meta = {
  title: 'Layouts/Accordion',
  component: Accordion,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    children: {
      table: { disable: true },
    },
    bar: {
      control: {
        type: 'text',
      },
      description:
        'The content to be displayed in the header bar of the accordion. It uses Accordion.Context and Accordion.Bar subcomponents',
    },
    rounded: {
      control: {
        type: 'boolean',
      },
      description:
        'Determines whether to have rounded corners for the accordion.',
    },

    className: {
      control: {
        type: 'text',
      },
      description:
        'Additional CSS classes to customize the accordion style (optional).',
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'The Accordion component is used to create collapsible content sections with a toggle button. You can customize the appearance and behavior of the accordion, including the rounded corners and header style.',
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Accordion.Content>Hola soy el menu</Accordion.Content>,
    rounded: true,
    bar: <Accordion.Bar>Crear Artículo</Accordion.Bar>,
  },
};
export const RedAccordion: Story = {
  args: {
    children: <Accordion.Content>Hola soy el menu</Accordion.Content>,
    rounded: true,
    bar: <Accordion.Bar>Crear Artículo</Accordion.Bar>,
    className:
      'gwk-items-center gwk-justify-between gwk-bg-surface-negative-hover gwk-text-text-white gwk-font-bold gwk-text-lg gwk-w-full gwk-h-12',
  },
};

export const BlueAccordion: Story = {
  args: {
    children: <Accordion.Content>Hola soy el menu</Accordion.Content>,
    rounded: true,
    bar: <Accordion.Bar>Crear Artículo</Accordion.Bar>,
    className:
      'gwk-items-center gwk-justify-between gwk-bg-surface-primary-hover gwk-text-text-white gwk-font-bold gwk-text-lg gwk-w-full gwk-h-12',
  },
};

export const RedAccordionSharp: Story = {
  args: {
    children: <Accordion.Content>Hola soy el menu</Accordion.Content>,
    rounded: false,
    bar: <Accordion.Bar>Crear Artículo</Accordion.Bar>,
    className:
      'gwk-items-center gwk-justify-between gwk-bg-surface-negative-hover gwk-text-text-white gwk-font-bold gwk-text-lg gwk-w-full gwk-h-12',
  },
};

export const BlueAccordionSharp: Story = {
  args: {
    children: <Accordion.Content>Hola soy el menu</Accordion.Content>,
    rounded: false,
    bar: <Accordion.Bar>Crear Artículo</Accordion.Bar>,
    className:
      'gwk-items-center gwk-justify-between gwk-bg-surface-primary-hover gwk-text-text-white gwk-font-bold gwk-text-lg gwk-w-full gwk-h-12',
  },
};
