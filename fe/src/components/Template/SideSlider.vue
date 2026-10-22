<script setup lang="ts">
defineProps({
  padding: {
    type: String,
    default: "var(--space-device-1)",
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
    padding: padding,
    background: background,
    }">
    <slot></slot>
  </main>
</template>

<style scoped>
.container {
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: row;

  overflow-x: auto;
}

.container > * {
  flex-shrink: 0;
}
</style>