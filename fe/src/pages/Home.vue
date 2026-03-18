<script setup>
import Logo from "@/components/Objects/Logo.vue";
import ContentFrame from "@/components/Template/ContentFrame.vue";
import QuickAccessTab from "@/components/Objects/QuickAccessTab.vue";
</script>

<template>
  <ContentFrame>
    <br>
    <Logo/>
    <h1 class="center-text heading">คณะสีอินทนิล</h1>
    <div style="height: var(--space-3);"></div>
  </ContentFrame>
  <QuickAccessTab/>
  <ContentFrame>
    <div style="height: var(--space-3);"></div>
  </ContentFrame>
</template>

<style scoped>
</style>