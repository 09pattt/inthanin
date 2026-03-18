<script setup>
import ContentFrame from "@/components/Template/ContentFrame.vue";
import QuickAccessStuff from "@/components/Objects/QuickAccessStuff.vue";
</script>

<template>
  <div class="ground">
    <ContentFrame full-height>
      <QuickAccessStuff/>
    </ContentFrame>
  </div>
</template>

<style scoped>
  .ground {
    width: 100%;
    max-width: 100%;
    height: fit-content;
    background-color: var(--c-main-bg2);
    filter: drop-shadow(var(--space-1) var(--space-1) var(--space-2) var(--c-t2-bl1));
  }
</style>