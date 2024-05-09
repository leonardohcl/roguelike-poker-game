import type { Meta, StoryObj } from "@storybook/vue3";
import PokerHandDisplay from "./poker-hand-display.vue";
import { HIGH_CARD } from "@/types/PokerHand";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Molecules/Poker Hand Display",
  tags: ['autodocs'],
  component: PokerHandDisplay,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  args: {
    handName: HIGH_CARD.name,
  },
} satisfies Meta<typeof PokerHandDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { PokerHandDisplay },
    setup() {
      return { args };
    },
    template: `<div style="width: 90%; margin: 0 auto;">
    <PokerHandDisplay v-bind="args"/>
</div>`,
  }),
};
