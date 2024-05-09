<script setup lang="ts">
import PlayingCard from "@/components/02_molecules/playing-card/playing-card.vue";
import Card from "@/types/Card";
import { computed } from "vue";
const { blockSelection, cards, maxSelected } = defineProps({
  cards: {
    type: Array<Card>,
    default: () => [],
  },
  maxSelected: {
    type: Number,
    default: 1,
  },
  blockSelection: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  "select-card": [card: Card];
  "deselect-card": [card: Card];
}>();

const selectedCount = computed(
  () => cards.filter((card) => card.selected === true).length
);

const canSelect = computed(() => {
  return selectedCount.value < maxSelected;
});

const toggleSelected = (card: Card) => {
  if (card.selected) {
    card.selected = false;
    emit("deselect-card", card);
  } else {
    if (!canSelect.value) return;
    card.selected = true;
    emit("select-card", card);
  }
}
</script>

<template>
  <div class="card-display">
    <div class="card-holder" v-for="card in cards">
      <PlayingCard
        :suit="card.suit"
        :rank="card.rank"
        :class="{
          selected: card.selected,
        }"
        @click="!blockSelection && toggleSelected(card)"
      />
    </div>
  </div>
</template>

<style lang="scss">
.card-display {
  display: grid;
  justify-content: space-between;
  grid-auto-flow: column;
  max-width: 100%;
  padding: $card-selected-displacement $card-height * 0.375 0;

  .card-holder {
    position: relative;
    height: $card-height;
  }

  .card {
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateX(-50%);
    transition: bottom 200ms;

    &.selected {
      bottom: $card-selected-displacement;
    }
  }
}
</style>
