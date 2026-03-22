<script setup>

defineProps({
  animation: String,
  animationDelay: String
})

</script>

<template>
  <div class="component__block" :style="{ animation: animation, animationDelay: animationDelay, opacity: animation ? '0' : '1' }">
    <header>
      <slot/>
    </header>
    <main>
      <slot name="bottom"/>
    </main>
  </div>
</template>

<style scoped>
  .component__block {
    height: 160px;
    width: 160px;
    border-radius: var(--space-1);
    background-color: var(--c-main-bg3);
    overflow: hidden;

    padding: var(--space-1);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }

  .component__block > header {
    justify-self: start;
    align-self: start;
    line-height: 1.1;
  }

  .component__block > main {
    justify-self: end;
    align-self: end;

    font-size: 32px;
  }
</style>