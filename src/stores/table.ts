import Dealer from "@/model/Dealer";
import Card from "@/types/Card";
import { remove } from "@/utils/array";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTableStore = defineStore("table", () => {
  const deck = ref(Dealer.newDeck());
  const hand = ref<Card[]>([]);
  const play = ref<Card[]>([]);
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
    remove(playingHand.value, card)
  }

  function playSelected() {
    while(playingHand.value.length > 0) {
      const card = playingHand.value.shift()!
      remove(hand.value, card)
      card.selected = false
      play.value.push(card)
    }
    
  }

  return {
    deck,
    hand,
    play,
    played,
    discarded,
    playingHand,
    draw,
    reset,
    addToPlayingHand,
    removeFromPlayingHand,
    playSelected,
  };
});
