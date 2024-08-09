import { Meta, StoryObj } from "@storybook/react";

import { ElasticSearch } from "./elastic-search";

import "../../../app/global.scss";
import "../../../app/reset.scss";

const meta = {
  title: "UI/ElasticSearch",
  component: ElasticSearch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ElasticSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    initialValue: "",
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
