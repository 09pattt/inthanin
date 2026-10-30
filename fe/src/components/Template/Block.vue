<script setup lang="ts">
import ContentFrame from "@/components/Template/ContentFrame.vue";
</script>

<template>
  <ContentFrame>
    <main class="content">
      <slot></slot>
    </main>
  </ContentFrame>
</template>

<style scoped>
.content {
  width: 100%;
  height: fit-content;
  overflow: hidden;
  filter: drop-shadow(0 var(--space-2) var(--space-2) var(--c-t3-bl1));
}

@media (min-width: 700px) {
  .content {
    border-radius: var(--space-2);
  }
}

</style>