import { Rank } from "@/types/Rank";
import { Suit } from "@/types/Suit";

export default interface Card {
  suit: Suit;
  rank: Rank;
  selected?: boolean
}

export class CardFactory {
  static new(suit: Suit, rank: Rank) {
    return { suit, rank } as Card;
  }
}
