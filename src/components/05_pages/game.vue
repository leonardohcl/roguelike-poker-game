<script setup lang="ts">
import { useStatsStore } from "@/stores/stats";
import { useTableStore } from "@/stores/table";
import PlayingTable from "@templates/playing-table/playing-table.vue";
import Sidebar from "@templates/sidebar/sidebar.vue";
import { ref } from "vue";

const table = useTableStore();
const stats = useStatsStore();

const animationSpeed = ref(1)

const start = () => {
  table.newGame();
  table.draw(stats.handSize);
};

const handlePlayCards = async () => {
  await table.playSelected();
  await table.scoreCardsOnTable();
  await table.clearTable();
  await table.draw(stats.handSize - table.hand.length);
};

start();
</script>

<template>
  <div class="game">
    <Sidebar />
    <PlayingTable @play-selected="handlePlayCards" />
  </div>
</template>

<style>
.game {
  display: grid;
  gap: 1rem;
  grid-template-columns: 250px auto;
}
</style>
