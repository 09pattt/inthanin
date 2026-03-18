<script setup>
defineProps({
  topGap: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div class="ground">
    <div class="nav_spacer"></div>
    <slot></slot>
  </div>
</template>

<style scoped>
  .ground {
    width: 100%;
    min-width: fit-content;
    height: 100%;
    min-height: 100dvh;
    background-color: var(--c-main-bg1);
  }

  .nav_spacer {
    height: v-bind(topGap + 'px');
  }
</style>