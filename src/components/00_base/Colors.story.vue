<script setup lang="ts">
import Suit from '@/types/Suit'

const colors = [...Suit.all()]

</script>

<template>
  <Story group="design" :layout="{type: 'grid'}">
    <Variant v-for="color in colors" :title="color">
      <div style="display: inline-block; width: 30px; height: 30px; margin-right: 1ch;" :class="`bg-${color}`"></div>
      {{ color }}
    </variant>
  </Story>
</template>
