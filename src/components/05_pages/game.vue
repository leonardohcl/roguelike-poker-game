<script setup lang="ts">
import { useTableStore } from "@/stores/table";
import PlayingTable from "@templates/playing-table/playing-table.vue";
import Sidebar from "@templates/sidebar/sidebar.vue";

const table = useTableStore();

table.newGame();
</script>

<template>
  <div class="game">
    <Sidebar />
    <PlayingTable />
  </div>
</template>

<style>
.game {
  display: grid;
  gap: 1rem;
  grid-template-columns: 250px auto;
}
</style>
