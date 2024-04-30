import Dealer from "@/model/Dealer";
import Card from "@/types/Card";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTableStore = defineStore("table", () => {
  const deck = ref(Dealer.newDeck());
  const hand = ref<Card[]>([]);
  const playingHand = ref<Card[]>([]);
  const played = ref<Card[]>([]);
  const discarded = ref<Card[]>([]);

  function draw(amount: number) {
    hand.value.push(...Dealer.draw(deck.value, amount));
  }

  function reset() {
    deck.value = Dealer.shuffle([
      hand.value,
      playingHand.value,
      played.value,
      discarded.value,
    ]);
    hand.value = [];
    playingHand.value = [];
    played.value = [];
    discarded.value = [];
  }

  function addToPlayingHand(card: Card) {
    playingHand.value.push(card);
  }

  function removeFromPlayingHand(card: Card) {
    const idx = playingHand.value.indexOf(card);
    if (idx < 0) return;
    playingHand.value.splice(idx, 1);
  }

  return {
    deck,
    hand,
    played,
    discarded,
    playingHand,
    draw,
    reset,
    addToPlayingHand,
    removeFromPlayingHand,
  };
});
