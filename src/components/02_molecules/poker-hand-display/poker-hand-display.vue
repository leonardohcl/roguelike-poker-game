<script setup lang="ts">
defineProps({
    handName: {type: String, default: ''},
})

</script>

<template>
    <div class="poker-hand-display">
        <div class="poker-hand-display__name">
            {{ handName }}
        </div>
    </div>
</template>