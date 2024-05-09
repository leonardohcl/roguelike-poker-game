import type { Meta, StoryObj } from "@storybook/vue3";
import Sidebar from "./sidebar.vue";

const meta = {
  title: "Templates/Sidebar",
  component: Sidebar,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
