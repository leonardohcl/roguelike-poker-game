<script setup lang="ts">
import Card from "@/components/01_atoms/card/card.vue";
import PokerButton from "@/components/01_atoms/poker-button/poker-button.vue";
import CardDisplay from "@/components/03_organisms/card-display/card-display.vue";
import { useStatsStore } from "@/stores/stats";
import { useTableStore } from "@/stores/table";
import { computed } from "vue";

const table = useTableStore();
const stats = useStatsStore();

const disablePlay = computed(
  () => table.selected.length === 0 || table.onTable.length > 0
);

defineEmits<{
  "play-selected": [];
}>();
</script>

<template>
  <div class="playing-table">
    <div class="playing-table__play-area">
      <CardDisplay :cards="table.onTable" block-selection />
    </div>
    <div class="playing-table__hand">
      <CardDisplay
        :cards="table.hand"
        :max-selected="5"
        :block-selection="table.onTable.length > 0"
      />
      <div class="playing-table__hand-capacity">
        {{ table.hand.length }} / {{ stats.handSize }}
      </div>
      <div class="playing-table__actions">
        <PokerButton
          label="Play"
          :disabled="disablePlay"
          @click="$emit('play-selected')"
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
