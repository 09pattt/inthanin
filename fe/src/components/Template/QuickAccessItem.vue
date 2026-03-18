<template>
  <div class="block">
    <div class="background">
      <slot name="background"></slot>
    </div>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="details">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .block {
    height: 100%;
    max-height: 100%;
    width: 240px;
    border-radius: var(--space-1);
    background-color: var(--c-main-bg3);
    overflow: hidden;

    padding: var(--space-1);
  }

  @media (min-width: 1024px) {
    .block {
      width: 320px;
    }
  }
</style>