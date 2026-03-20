<script setup>
import CenterFrame from "@/components/Template/CenterFrame.vue";
import QuickAccessContent from "@/components/Objects/QuickAccessTab/QuickAccessContent.vue";
</script>

<template>
  <div class="ground">
    <CenterFrame full-height>
      <QuickAccessContent/>
    </CenterFrame>
  </div>
</template>

<style scoped>
  .ground {
    width: 100%;
    max-width: 100%;
    height: fit-content;
  }
</style>