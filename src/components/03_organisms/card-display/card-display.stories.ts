import type { Meta, StoryObj } from "@storybook/vue3";
import CardDisplay from "./card-display.vue";
import { randomPlayingCard } from "@/utils/random";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Organisms/Card Display",
  component: CardDisplay,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  argTypes: {
    cards: { control: "number" },
  },
  args: {
    cards: randomPlayingCard(8),
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
