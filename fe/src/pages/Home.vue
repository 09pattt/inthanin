<script setup>
import NavbarBlankSpace from "@/components/Template/NavbarBlankSpace.vue";
import Logo from "@/components/Objects/Logo.vue";
import ContentFrame from "@/components/Template/ContentFrame.vue";
</script>

<template>
  <main class="home">
    <div class="page__header">
      <NavbarBlankSpace/>

      <ContentFrame>
        <br>
        <Logo/>
        <h1 class="center-text heading" style="color: var(--c-p1);">คณะสีอินทนิล</h1>
        <div style="height: var(--space-3);"></div>
      </ContentFrame>
    </div>
  </main>
</template>

<style scoped>
.home .page__header {
  width: 100%;
  height: fit-content;
  filter: drop-shadow(0 0 var(--space-2) var(--c-t1-p2));
  animation: fadeIn 2s ease;
}

@keyframes topOpening {
  0% {
    transform: scale(1.2);
    opacity: 0;
  }
  80% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: none;
    opacity: 1;
  }
}
</style>