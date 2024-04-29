<script setup lang="ts">
import PlayingCard from "@/components/02_molecules/playing-card/playing-card.vue";
import Card from "@/model/Card";
const { cards } = defineProps({
  cards: {
    type: Array<Card>,
    default: () => [],
  },
});
</script>

<template>
  <div class="card-display">
    <div class="card-holder" v-for="card in cards">
      <PlayingCard :suit="card.suit" :rank="card.rank" />
    </div>
  </div>
</template>

<style lang="scss">
.card-display {
  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;
  max-width: 100%;
  padding: 0 $card-height * 0.375;

  .card-holder {
    position: relative;
    height: $card-height;
  }

  .card {
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateX(-50%);
  }
}
</style>
