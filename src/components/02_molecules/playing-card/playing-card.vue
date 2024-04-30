<script setup lang="ts">
import Card from "@atoms/card/card.vue";
import { SPADES, Suit } from "@/types/Suit";
import type { PropType } from "vue";
import { Rank, ACE } from "@/types/Rank";

defineProps({
  /** Suit that card represents */
  suit: {
    type: Object as PropType<Suit>,
    default: SPADES,
  },
  /** Rank of the card  */
  rank: {
    type: Object as PropType<Rank>,
    default: ACE,
  },
});
</script>

<template>
  <Card class="playing-card" :class="`text-${suit.name}`">
    <div class="rank">{{ rank.symbol }}</div>
    <div class="suit">{{ suit.name }}</div>
  </Card>
</template>

<style lang="scss">
.playing-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;

  .rank {
    font-size: 40px;
    font-weight: bolder;
  }
  .suit {
    font-size: 20px;
    font-weight: lighter;
  }
}
</style>
