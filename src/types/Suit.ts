export type Suit = "spades" | "hearts" | "clubs" | "diamonds";

const SPADES: Suit = "spades";
const HEARTS: Suit = "hearts";
const CLUBS: Suit = "clubs";
const DIAMONDS: Suit = "diamonds";

const all = () => [SPADES, HEARTS, CLUBS, DIAMONDS] as Suit[]

export default {
  SPADES,
  HEARTS,
  CLUBS,
  DIAMONDS,
  all
};

