<script setup>
defineProps({
  noCentering: Boolean,
  fullHeight: Boolean,
  relativePosition: Boolean,
  padding: String,
  zIndex: String
})
</script>

<template>
  <div class="content" :class="{
      'noCentering' : noCentering,
      'fullHeight' : fullHeight,
      'relativePosition' : relativePosition,
    }" :style="{padding: padding, zIndex: zIndex}"
  >
    <slot/>
  </div>
</template>

<style scoped>
.content {
  margin: 0 auto;
  width: 100%;
  min-width: 400px;
  max-width: 700px;
  position: relative;
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
  .content {
    max-width: 1280px;
  }
}
</style>