import Dealer from "@/model/Dealer";
import Card from "@/types/Card";
import { allHands } from "@/types/PokerHand";
import { maxBy, remove } from "@/utils/array";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

const POKER_HANDS = allHands();

export const useTableStore = defineStore("table", () => {
  const deck = ref(Dealer.newDeck());
  const hand = ref<Card[]>([]);
  const onTable = ref<Card[]>([]);
  const played = ref<Card[]>([]);
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

  function draw(amount: number) {
    hand.value.push(...Dealer.draw(deck.value, amount));
  }

  function endTable() {
    deck.value = Dealer.shuffle([
      deck.value,
      hand.value,
      played.value,
      discarded.value,
    ]);
    hand.value = [];
    played.value = [];
    discarded.value = [];
  }

  function playSelected() {
    const cards = hand.value.filter((card) => card.selected === true);
    while (cards.length > 0) {
      const card = cards.shift()!;
      remove(hand.value, card);
      card.selected = false;
      onTable.value.push(card);
    }
  }

  function newGame() {
    deck.value = Dealer.shuffle([Dealer.newDeck()]);
    hand.value = [];
    played.value = [];
    discarded.value = [];
    draw(8);
  }

  return {
    deck,
    hand,
    onTable,
    played,
    discarded,
    selected,
    matchedHands,
    activeHand,
    newGame,
    draw,
    endTable,
    playSelected,
  };
});
