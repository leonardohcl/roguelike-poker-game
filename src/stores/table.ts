import Dealer from "@/model/Dealer";
import Card from "@/types/Card";
import PokerHand, { allHands } from "@/types/PokerHand";
import { maxBy, remove } from "@/utils/array";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const POKER_HANDS = allHands();

export const useTableStore = defineStore("table", () => {
  const deck = ref(Dealer.newDeck());
  const hand = ref<Card[]>([]);
  const onTable = ref<Card[]>([]);
  const tableHand = ref<PokerHand | null>();
  const discarded = ref<Card[]>([]);

  const selected = computed(() =>
    hand.value.filter((card) => card.selected === true)
  );

  const matchedHands = computed(() => {
    if (selected.value.length === 0) return [];
    return POKER_HANDS.filter((hand) => hand.matches(selected.value));
  });

  const activeHand = computed(() => {
    if (matchedHands.value.length == 0) return null;
    return maxBy(matchedHands.value, "priority");
  });

  async function draw(amount: number) {
    const cards = Dealer.draw(deck.value, amount);
    for (let i = 0; i < cards.length; i++) {
      hand.value.push(cards[i]);
      await Dealer.handToPlayer(cards.length);
    }
  }

  function endTable() {
    deck.value = Dealer.shuffle([
      deck.value,
      hand.value,
      discarded.value,
    ]);
    hand.value = [];
    discarded.value = [];
  }

  async function playSelected() {
    const cards = hand.value.filter((card) => card.selected === true);
    const cardsPlayed = cards.length;
    tableHand.value = activeHand.value;
    while (cards.length > 0) {
      const card = cards.shift()!;
      remove(hand.value, card);
      card.selected = false;
      onTable.value.push(card);
      await Dealer.placeOnTable(cardsPlayed);
    }
  }

  async function scoreCardsOnTable() {
    if (!tableHand.value || onTable.value.length === 0) return;
    const cards = tableHand.value.scoredCards(onTable.value);
    for (let i = 0; i < cards.length; i++) {
      await Dealer.score(cards[i]);
    }
  }

  async function clearTable() {
    discarded.value.push(...onTable.value);
    tableHand.value = null
    const cardsOnTable = onTable.value.length;
    while (onTable.value.length > 0) {
      onTable.value.pop();
      await Dealer.removeFromTable(cardsOnTable);
    }
  }

  function newGame() {
    deck.value = Dealer.shuffle([Dealer.newDeck()]);
    hand.value = [];
    discarded.value = [];
    onTable.value = [];
  }

  return {
    deck,
    hand,
    onTable,
    discarded,
    selected,
    matchedHands,
    activeHand,
    tableHand,
    newGame,
    draw,
    endTable,
    scoreCardsOnTable,
    clearTable,
    playSelected,
  };
});
