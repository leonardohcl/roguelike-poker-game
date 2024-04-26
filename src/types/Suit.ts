export type SuitType = "spades" | "hearts" | "clubs" | "diamonds";

const SPADES: SuitType = "spades";
const HEARTS: SuitType = "hearts";
const CLUBS: SuitType = "clubs";
const DIAMONDS: SuitType = "diamonds";

const all = () => [SPADES, HEARTS, CLUBS, DIAMONDS] as SuitType[]

export default {
  SPADES,
  HEARTS,
  CLUBS,
  DIAMONDS,
  all
};

