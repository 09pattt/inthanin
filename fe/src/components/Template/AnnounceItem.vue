<script setup>

defineProps({
  animation: String,
  animationDelay: String
})

</script>

<template>
  <div class="component__block" :style="{ animation: animation, animationDelay: animationDelay, opacity: animation ? '0' : '1' }">
    <header>
      <slot name="header"/>
    </header>
    <main>
      <slot/>
    </main>
  </div>
</template>

<style scoped>
.component__block {
  height: 320px;
  width: 240px;
  border-radius: var(--space-1);
  background-color: var(--c-main-bg3);
  overflow: hidden;

  padding: var(--space-1);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
}

.component__block > header {
  line-height: 1.2;
}
</style>