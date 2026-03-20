<script setup>
</script>

<template>
  <div class="block">
    <header>
      <slot/>
    </header>
    <main>
      <slot name="bottom"/>
    </main>
  </div>
</template>

<style scoped>
  .block {
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

  header {
    justify-self: start;
    align-self: start;
    line-height: 1.1;
  }

  main {
    justify-self: end;
    align-self: end;

    font-size: 32px;
  }
</style>