<script setup>
defineProps({
  noCentering: Boolean,
  fullHeight: Boolean,
  relativePosition: Boolean,
  padding: String
})
</script>

<template>
  <div id="content" :class="{
      'noCentering' : noCentering,
      'fullHeight' : fullHeight,
      'relativePosition' : relativePosition,
    }" :style="{padding: padding}"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
#content {
  width: 100%;

  margin: 0 auto;
  min-width: 400px;
  max-width: 700px;
}

.noCentering {
  margin: 0;
  min-height: auto;
  max-height: none;
}

.fullHeight {
  height: 100%;
}

.relativePosition {
  position: relative;
}

@media (min-width: 1024px) {
  #content {
    max-width: 1280px;
  }
}
</style>