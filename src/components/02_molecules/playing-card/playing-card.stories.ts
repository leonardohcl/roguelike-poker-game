import type { Meta, StoryObj } from "@storybook/vue3";
import PlayingCard from "./playing-card.vue";
import { SPADES, HEARTS, CLUBS, DIAMONDS } from "@/types/Suit";
import {
  ACE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  JACK,
  QUEEN,
  KING,
} from "@/types/Rank";

const SUITS = { SPADES, HEARTS, CLUBS, DIAMONDS };
const RANKS = {
  ACE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  JACK,
  QUEEN,
  KING,
};
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Molecules/Playing Card",
  component: PlayingCard,
  tags: ["autodocs"],
  argTypes: {
    suit: {
      options: Object.keys(SUITS),
      mapping: SUITS,
      control: {
        type: "select",
        labels: {
          SPADES: SPADES.name,
          HEARTS: HEARTS.name,
          CLUBS: CLUBS.name,
          DIAMONDS: DIAMONDS.name,
        },
      },
    },
    rank: {
      options: Object.keys(RANKS),
      mapping: RANKS,
      control: {
        type: "select",
        labels: {
          ACE: ACE.name,
          TWO: TWO.name,
          THREE: THREE.name,
          FOUR: FOUR.name,
          FIVE: FIVE.name,
          SIX: SIX.name,
          SEVEN: SEVEN.name,
          EIGHT: EIGHT.name,
          NINE: NINE.name,
          TEN: TEN.name,
          JACK: JACK.name,
          QUEEN: QUEEN.name,
          KING: KING.name,
        },
      },
    },
  },
  args: {
    suit: SPADES,
    rank: ACE
  },
} satisfies Meta<typeof PlayingCard>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: {},
};
