import Card, { CardFactory } from "@/types/Card";
import { allRanks } from "@/types/Rank";
import { allSuits } from "@/types/Suit";
import { sleep } from "@/utils/async";
import { ANIMATION_DURATION } from "@/utils/config";
import { randomInt, shuffle } from "@/utils/random";

export default class Dealer {
  static newDeck(): Card[] {
    const cards: Card[] = [];
    allSuits().map((suit) => {
      allRanks().map((rank) => {
        cards.push(CardFactory.new(suit, rank));
      });
    });
    return cards;
  }

  static draw(deck: Card[], amount: number) {
    const drawn: Card[] = [];
    for (let i = 0; i < amount; i++) {
      const idx = randomInt(0, deck.length);
      drawn.push(...deck.splice(idx, 1));
    }
    return drawn;
  }

  static shuffle(piles: Card[][]) {
    return shuffle(
      piles.reduce((deck, pile) => {
        deck.push(...pile);
        return deck;
      }, [])
    );
  }

  static async handToPlayer(totalCards: number) {
    await sleep(ANIMATION_DURATION / totalCards);
  } 

  static async placeOnTable(totalCards: number) {
    await sleep(ANIMATION_DURATION / totalCards);
  }

  static async removeFromTable(totalCards: number) {
    await sleep(ANIMATION_DURATION / totalCards);
  }

  static async score(card: Card) {
    card.selected = true;
    await sleep(ANIMATION_DURATION);
  }
}
