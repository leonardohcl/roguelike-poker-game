import type { Meta, StoryObj } from "@storybook/vue3";
import CardDisplay from "./card-display.vue";
import { randomPlayingCard } from "@/utils/random";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Organisms/Card Display",
  component: CardDisplay,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  argTypes: {
    cards: { control: "number" },
  },
  args: {
    maxSelected: 5,
    cards: randomPlayingCard(8),
    "onSelect-card": fn(),
    "onDeselect-card": fn(),
  },
} satisfies Meta<typeof CardDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { CardDisplay },
    setup() {
      return { args };
    },
    template: `<div style="width: 90%; margin: 0 auto;">
    <CardDisplay v-bind="args"/>
</div>`,
  }),
};
