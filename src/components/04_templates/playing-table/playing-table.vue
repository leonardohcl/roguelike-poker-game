<script setup lang="ts">
import PokerButton from "@/components/01_atoms/poker-button/poker-button.vue";
import CardDisplay from "@/components/03_organisms/card-display/card-display.vue";
import { useTableStore } from "@/stores/table";
import Card from "@/types/Card";
import { computed } from "vue";

const table = useTableStore();

const handleSelect = (card: Card) => {
  table.addToPlayingHand(card);
};

const handleDeselect = (card: Card) => {
  table.removeFromPlayingHand(card);
};

const disablePlay = computed(
  () => table.playingHand.length === 0 || table.play.length > 0
);
</script>

<template>
  <div class="playing-table">
    <div class="playing-table__play-area">
      <CardDisplay :cards="table.play" :max-selected="0" />
    </div>
    <div class="playing-table__hand">
      <CardDisplay
        :cards="table.hand"
        :max-selected="5"
        @select-card="handleSelect"
        @deselect-card="handleDeselect"
      />

      <div class="playing-table__actions">
        <PokerButton
          label="Play"
          :disabled="disablePlay"
          @click="table.playSelected"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.playing-table {
  &__play-area {
    min-height: $card-height + $card-selected-displacement;
  }

  &__hand {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .card-display {
      min-height: $card-height + $card-selected-displacement;
    }
  }

  &__actions {
    text-align: center;
  }
}
</style>
