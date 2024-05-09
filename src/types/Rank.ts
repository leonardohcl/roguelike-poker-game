import Dictionary from "./Dictionary";

export interface Rank {
  value: number;
  name: string;
  next?: string;
  symbol: string;
}

export const ACE: Rank = { value: 13, symbol: "A", name: "ace" };
export const KING: Rank = {
  value: 10,
  symbol: "K",
  name: "king",
  next: ACE.symbol,
};
export const QUEEN: Rank = {
  value: 10,
  symbol: "Q",
  name: "queen",
  next: KING.symbol,
};
export const JACK: Rank = {
  value: 10,
  symbol: "J",
  name: "jack",
  next: QUEEN.symbol,
};
export const TEN: Rank = {
  value: 10,
  symbol: "10",
  name: "ten",
  next: JACK.symbol,
};
export const NINE: Rank = {
  value: 9,
  symbol: "9",
  name: "nine",
  next: TEN.symbol,
};
export const EIGHT: Rank = {
  value: 8,
  symbol: "8",
  name: "eight",
  next: NINE.symbol,
};
export const SEVEN: Rank = {
  value: 7,
  symbol: "7",
  name: "seven",
  next: EIGHT.symbol,
};
export const SIX: Rank = {
  value: 6,
  symbol: "6",
  name: "six",
  next: SEVEN.symbol,
};
export const FIVE: Rank = {
  value: 5,
  symbol: "5",
  name: "five",
  next: SIX.symbol,
};
export const FOUR: Rank = {
  value: 4,
  symbol: "4",
  name: "four",
  next: FIVE.symbol,
};
export const THREE: Rank = {
  value: 3,
  symbol: "3",
  name: "three",
  next: FOUR.symbol,
};
export const TWO: Rank = {
  value: 2,
  symbol: "2",
  name: "two",
  next: THREE.symbol,
};

const dict: Dictionary<Rank> = {
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
  ACE,
};

export const allRanks = () => Object.keys(dict).map((key) => dict[key]);

export default dict;
