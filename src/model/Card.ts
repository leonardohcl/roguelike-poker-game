import { Rank } from "@/types/Rank";
import { Suit } from "@/types/Suit";

export default class Card {
  suit?: Suit;
  rank?: Rank;

  constructor(suit: Suit, rank: Rank) {
    this.suit = suit;
    this.rank = rank;
  }
}
