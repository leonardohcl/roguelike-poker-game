import type { Meta, StoryObj } from "@storybook/vue3";
import PlayingTable from "./playing-table.vue";
import { useTableStore } from "@/stores/table";

const meta = {
  title: "Templates/Playing Table",
  component: PlayingTable,
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof PlayingTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { PlayingTable },
    setup() {
      const table = useTableStore()
      if(table.hand.length == 0) table.draw(8)
      return { args };
    },
    template: `<PlayingTable />`
  }),
};
