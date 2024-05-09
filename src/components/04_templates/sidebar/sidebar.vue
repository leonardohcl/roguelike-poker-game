<script setup lang="ts">
import { useTableStore } from "@/stores/table";
import PokerHandDisplay from "@molecules/poker-hand-display/poker-hand-display.vue";

const table = useTableStore()
</script>

<template>
  <div class="sidebar">
    <PokerHandDisplay :hand-name="table.activeHand?.name"/>
  </div>
</template>

<style lang="scss">
.sidebar {
  border: solid 1px;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
