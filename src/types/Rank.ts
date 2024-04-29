import Dictionary from "./Disctionary";

export interface Rank {
  value: number;
  symbol: string;
}

export const ACE = { value: 13, symbol: "A", name: "ace" };
export const TWO = { value: 2, symbol: "2", name: "two" };
export const THREE = { value: 3, symbol: "3", name: "three" };
export const FOUR = { value: 4, symbol: "4", name: "four" };
export const FIVE = { value: 5, symbol: "5", name: "five" };
export const SIX = { value: 6, symbol: "6", name: "six" };
export const SEVEN = { value: 7, symbol: "7", name: "seven" };
export const EIGHT = { value: 8, symbol: "8", name: "eight" };
export const NINE = { value: 9, symbol: "9", name: "nine" };
export const TEN = { value: 10, symbol: "10", name: "ten" };
export const JACK = { value: 10, symbol: "J", name: "jack" };
export const QUEEN = { value: 10, symbol: "Q", name: "queen" };
export const KING = { value: 10, symbol: "K", name: "king" };

const dict: Dictionary<Rank> = {
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

export const allRanks = () => Object.keys(dict).map((key) => dict[key]);

export default dict;
