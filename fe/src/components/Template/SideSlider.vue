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
  height: 260px;

  display: flex;
  flex-direction: row;

  overflow-x: auto;
  overflow-y: hidden;
}

.container > * {
  flex-shrink: 0;
}
</style>