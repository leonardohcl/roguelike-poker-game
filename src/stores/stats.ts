import { defineStore } from "pinia";
import { ref } from "vue";

export const useStatsStore = defineStore("stats", () => {
  const handSize = ref(8);

  return {
    handSize,
  };
});
