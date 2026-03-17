<script setup>
defineProps({
  topGap: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div id="ground">
    <div id="nav_spacer"></div>
    <div id="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  #ground {
    width: 100%;
    height: fit-content;
    min-height: 100%;
    background-color: var(--c-main-bg1);
  }

  #nav_spacer {
    height: v-bind(topGap + 'px');
  }

  #content {
    margin: 0 auto;
    padding: 10px;
  }
</style>