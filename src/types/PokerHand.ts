import { groupBy, maxBy } from "@/utils/array";
import Card from "./Card";
import Dictionary from "./Dictionary";
import { forEachKey } from "@/utils/object";
import { Rank } from "./Rank";

function groupByRank(cards: Card[]) {
  return groupBy(cards as Dictionary<any>[], "rank.symbol");
}

function groupBySuit(cards: Card[]) {
  return groupBy(cards as Dictionary<any>[], "suit.name");
}

function hasSameRankCount(cards: Card[], count: number) {
  const grouped = groupByRank(cards);
  let hasSame = false;
  forEachKey(grouped, (_, group) => {
    if (group.length >= count) hasSame = true;
  });
  return hasSame;
}

function getSuits(cards: Card[]) {
  const grouped = groupBySuit(cards);
  return Object.keys(grouped);
}

function getRankGroupsBySize(cards: Card[], size: number) {
  const grouped = groupByRank(cards);
  const groups: Card[][] = [];
  forEachKey(grouped, (_, group) => {
    if (group.length === size) groups.push(group);
  });

  return groups;
}

function hasNextRank(rank: Rank, cards: Card[]) {
  return !!cards.find((card) => card.rank.symbol === rank.next);
}

export default interface PokerHand {
  id: string;
  name: string;
  priority: number;
  matches: (cards: Card[]) => boolean;
  scoredCards: (cards: Card[]) => Card[];
}

export const HIGH_CARD: PokerHand = {
  id: "highCard",
  name: "High Card",
  priority: 0,
  matches: () => true,
  scoredCards(cards) {
    return [maxBy(cards, "rank.value")];
  },
};

export const PAIR: PokerHand = {
  id: "pair",
  name: "Pair",
  priority: 1,
  matches: (cards) => {
    if (cards.length < 2) return false;
    return hasSameRankCount(cards, 2);
  },
  scoredCards(cards) {
    return getRankGroupsBySize(cards, 2)[0];
  },
};

export const TWO_PAIR: PokerHand = {
  id: "twoPain",
  name: "Two Pair",
  priority: 2,
  matches: (cards) => {
    if (cards.length < 4) return false;
    const grouped = groupByRank(cards);
    let pairCount = 0;
    forEachKey(grouped, (_, group) => {
      if (group.length >= 2) pairCount++;
    });
    return pairCount > 1;
  },
  scoredCards(cards) {
    const pairs = getRankGroupsBySize(cards, 2);
    return [...pairs[0], ...pairs[1]];
  },
};

export const THREE_OF_KIND: PokerHand = {
  id: "three",
  name: "Three of Kind",
  priority: 3,
  matches: (cards) => {
    if (cards.length < 3) return false;
    return hasSameRankCount(cards, 3);
  },
  scoredCards(cards) {
    return getRankGroupsBySize(cards, 3)[0];
  },
};

export const STRAIGHT: PokerHand = {
  id: "str8",
  name: "Straight",
  priority: 4,
  matches: (cards) => {
    if (cards.length < 5) return false;
    let hasNext = 0;
    cards.forEach((card) => {
      if (hasNextRank(card.rank, cards)) hasNext++;
    });
    return hasNext === 4;
  },
  scoredCards(cards) {
    return cards;
  },
};

export const FLUSH: PokerHand = {
  id: "flush",
  name: "Flush",
  priority: 5,
  matches: (cards) => {
    if (cards.length < 5) return false;
    const suites = getSuits(cards);
    return suites.length === 1;
  },
  scoredCards(cards) {
    return cards;
  },
};

export const FULL_HOUSE: PokerHand = {
  id: "fullHouse",
  name: "Full House",
  priority: 6,
  matches: (cards) => {
    if (cards.length < 5) return false;
    return hasSameRankCount(cards, 2) && hasSameRankCount(cards, 3);
  },
  scoredCards(cards) {
    return cards;
  },
};

export const FOUR_OF_KIND: PokerHand = {
  id: "four",
  name: "Four of Kind",
  priority: 7,
  matches: (cards) => {
    if (cards.length < 4) return false;
    return hasSameRankCount(cards, 4);
  },
  scoredCards(cards) {
    return getRankGroupsBySize(cards, 4)[0];
  },
};

export const STRAIGHT_FLUSH: PokerHand = {
  id: "str8Flush",
  name: "Straight Flush",
  priority: 8,
  matches: (cards) => {
    if (cards.length < 5) return false;
    return FLUSH.matches(cards) && STRAIGHT.matches(cards);
  },
  scoredCards(cards) {
    return cards;
  },
};

export const allHands = () => [
  STRAIGHT_FLUSH,
  FOUR_OF_KIND,
  FULL_HOUSE,
  FLUSH,
  STRAIGHT,
  THREE_OF_KIND,
  TWO_PAIR,
  PAIR,
  HIGH_CARD,
];
