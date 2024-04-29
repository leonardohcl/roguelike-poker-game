<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.card {
    aspect-ratio: 3/4;
    height: $card-height;
    border-radius: 1rem;
    background-color: beige;
    border: solid 1px darken(beige, 15%);
    box-shadow: 2px 3px 4px 0 rgba(0,0,0,.3);
}
</style>