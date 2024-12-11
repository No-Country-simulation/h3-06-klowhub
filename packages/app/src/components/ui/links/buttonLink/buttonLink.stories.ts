import type { Meta, StoryObj } from '@storybook/react';
import ButtonLink from './ButtonLink';

const meta = {
  title: 'Nav/ButtonLink',
  tags: ['autodocs'],
  component: ButtonLink,
  parameters: {
    title: 'Navigation ButtonLikn',
    componentSubtitle:
      'The `BaseButton` component is a versatile React button component that can be customized with various variants and sizes.',
  },
  argTypes: {
    size: {
      description: 'The colors of the buttons',
      control: 'radio',
      options: ['xl', 'lg', 'md', 'sm', 'xs'],
    },
    variant: {
      description: 'The sizes of the buttons',
      control: 'radio',
      options: [
        'primary',
        'secondary',
        'terciary',
        'quaternary',
        'quinary',
        'outline',
      ],
    },
    rounded: {
      description: 'The form of the buttons',
      control: 'radio',
      options: ['full', 'left', 'right'],
    },
    fullWidth: {
      description: 'The different sizes',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof ButtonLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'xl',
    fullWidth: false,
    children: 'Botón',
    href: '/',
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
  },
};

export const Terciary: Story = {
  args: {
    ...Primary.args,
    variant: 'terciary',
  },
};

export const Quarternary: Story = {
  args: {
    ...Primary.args,
    variant: 'quaternary',
  },
};

export const Quinary: Story = {
  args: {
    ...Primary.args,
    variant: 'quinary',
  },
};

export const Outline: Story = {
  args: {
    ...Primary.args,
    variant: 'outline',
  },
};

export const XLarge: Story = {
  args: {
    ...Primary.args,
    size: 'xl',
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    size: 'lg',
  },
};

export const Medium: Story = {
  args: {
    ...Primary.args,
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: 'sm',
  },
};

export const XSmall: Story = {
  args: {
    ...Primary.args,
    size: 'xs',
  },
};

export const RoundedFull: Story = {
  args: {
    ...Outline.args,
    size: 'sm',
    rounded: 'full',
  },
};

export const RoundedLeft: Story = {
  args: {
    ...RoundedFull.args,
    rounded: 'left',
  },
};

export const RoundedRight: Story = {
  args: {
    ...RoundedFull.args,
    rounded: 'right',
  },
};

export const fullWidth: Story = {
  args: {
    ...Primary.args,
    fullWidth: true,
  },
};
