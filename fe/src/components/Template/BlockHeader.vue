<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h2>
      <slot></slot>
    </h2>
  </div>
</template>

<style scoped>

.container {
  height: fit-content;
  width: 100%;

  background: var(--c-p3);

  padding-left: var(--space-device-1);
}

.container h2 {
  color: var(--c-w3);
}

</style>