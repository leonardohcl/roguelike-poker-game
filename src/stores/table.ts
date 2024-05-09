import Dealer from "@/model/Dealer";
import Card from "@/types/Card";
import { remove } from "@/utils/array";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useTableStore = defineStore("table", () => {
  const deck = ref(Dealer.newDeck());
  const hand = ref<Card[]>([]);
  const onTable = ref<Card[]>([]);
  const played = ref<Card[]>([]);
  const discarded = ref<Card[]>([]);

  const selected = computed(() => hand.value.filter(card => card.selected === true))

  function draw(amount: number) {
    hand.value.push(...Dealer.draw(deck.value, amount));
  }

  function reset() {
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
    const cards = hand.value.filter(card => card.selected === true)
    while(cards.length > 0) {
      const card = cards.shift()!
      remove(hand.value, card)
      card.selected = false
      onTable.value.push(card)
    }
  }

  return {
    deck,
    hand,
    onTable,
    played,
    discarded,
    selected,
    draw,
    reset,
    playSelected,
  };
});
