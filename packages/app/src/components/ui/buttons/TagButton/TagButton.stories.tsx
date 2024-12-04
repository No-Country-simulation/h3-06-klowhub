import TagButton from "./TagButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Buttons/TagButton",
  component: TagButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile TagButton component for interacting with labeled elements.",
        // You can add additional details here about usage, props, etc.
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "The content displayed on the button.",
    },
    type: {
      control: {
        type: "select",
        options: ["close", "arrow"],
      },
      description: "Button type (close or arrow).",
    },
    withHash: {
      control: "boolean",
      description: "Include a hash symbol with the text in the tag.",
    },
    onClick: {
      control: false, // Hiding the control for onClick as per the original configuration.
    },
  },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: {
    children: "Mercado",
  },
};

export const WithTypeArrow: Story = {
  args: {
    children: "Ver más",
    type: "arrow",
    withHash: false,
  },
};

export const IpButtonTag: Story = {
  args: {
    children: "03/06/2023 08:09  IP.192.228.17.57",
    withHash: false,
  },
};
