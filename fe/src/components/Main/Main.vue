<script setup>
</script>

<template>
  <div class="ground">
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
</style>