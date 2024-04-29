import type { Meta, StoryObj } from "@storybook/vue3";
import Card from "./card.vue";

const meta = {
  title: "Atoms/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};
