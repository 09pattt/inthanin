<script setup lang="ts">
defineProps({
  height: {
    type: String,
    default: "fit-content",
  },
  padding: {
    type: String,
    default: "var(--space-1)",
  },
  background: {
    type: String,
    default: "var(--c-main-bg2)",
  },
})
</script>

<template>
  <main class="container"
        :style="{
    height: height,
    padding: padding,
    background: background,
    }">
    <slot></slot>
  </main>
</template>

<style scoped>
.container {
  width: 100%;

  display: flex;
  flex-direction: row;

  overflow-x: auto;
  overflow-y: hidden;
}

.container > * {
  flex-shrink: 0;
}
</style>