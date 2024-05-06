<script setup lang="ts">
defineProps({
  label: { type: String, default: "" },
});
</script>

<template>
  <button class="poker-button">
    {{ label }}
  </button>
</template>

<style lang="scss">
.poker-button {
  border: none;
  background-color: lightgreen;
  padding: 1em;
  border-radius: 0.75em;
  transition: background-color 100ms;

  &:hover,
  &:focus {
    background-color: darken(lightgreen, 15%);
  }

  &:focus {
    outline: solid 3px green;
  }

  &:active {
    background-color: lighten(lightgreen, 7%);
  }
}
</style>
