import type { Meta, StoryObj } from "@storybook/vue3";
import Game from "./game.vue";

const meta = {
  title: "Pages/Game",
  component: Game,
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof Game>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
