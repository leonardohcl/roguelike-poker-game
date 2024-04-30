import Dictionary from "./Dictionary";

export interface Suit {
  order: number;
  name: string;
}

export const SPADES: Suit = { order: 1, name: "spades" };
export const HEARTS: Suit = { order: 2, name: "hearts" };
export const CLUBS: Suit = { order: 3, name: "clubs" };
export const DIAMONDS: Suit = { order: 4, name: "diamonds" };

const dict: Dictionary<Suit> = {
  SPADES, HEARTS, CLUBS, DIAMONDS
} 

export const allSuits = () => Object.keys(dict).map(key => dict[key]);

export default dict;
