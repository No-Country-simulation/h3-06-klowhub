import Tag from "./Tag";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "General/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "The Tag component is used to display a tag with optional text content. You can customize the appearance and behavior of the tag, including whether to include a hash symbol (#).",
      },
    },
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
      description: "The text content or ReactNode to display within the tag.",
    },
    withHash: {
      control: {
        type: "boolean",
      },
      description:
        "Determines whether to include a hash symbol (#) before the tag text (optional).",
    },
    className: {
      control: {
        type: "text",
      },
      description:
        "Additional CSS classes to customize the tag style (optional).",
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// DEFAULT CATEGORY
export const Default: Story = {
  args: {
    children: "Mercado",
  },
};
