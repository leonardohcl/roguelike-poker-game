<script setup lang="ts">
import CardDisplay from "@/components/03_organisms/card-display/card-display.vue";
import { useTableStore } from "@/stores/table";

const table = useTableStore();
</script>

<template>
  <div class="playing-table">
    <CardDisplay
      :cards="table.hand"
      :max-selected="5"
      @select-card="table.addToPlayingHand"
      @deselect-card="table.removeFromPlayingHand"
    />
  </div>
</template>
