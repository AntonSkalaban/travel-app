import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./alert";

const meta = {
  title: "UI/Alert",
  component: Alert,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    message: "Success!",
    type: "success",
  },
};

export const Error: Story = {
  args: {
    message: "Error!",
    type: "error",
  },
};
