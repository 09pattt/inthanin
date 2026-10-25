<script setup lang="ts">
import ContentFrame from "@/components/Template/ContentFrame.vue";
</script>

<template>
  <ContentFrame padding="var(--space-1)">
    <main class="content">
      <slot></slot>
    </main>
  </ContentFrame>
</template>

<style scoped>
.content {
  width: 100%;
  height: fit-content;
  filter: drop-shadow(0 var(--space-2) var(--space-2) var(--c-t3-bl1));
  border-radius: var(--space-2);

  overflow: hidden;
}

</style>