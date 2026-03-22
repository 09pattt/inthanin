<script setup>
defineProps({
  noCentering: Boolean,
  fullHeight: Boolean,
  relativePosition: Boolean,
  padding: String,
  zIndex: String,
  pointerEvents: String
})
</script>

<template>
  <div class="app_center_frame"
       :class="{
    'noCentering' : noCentering,
    'fullHeight' : fullHeight,
    'relativePosition' : relativePosition,
    }"
       :style="{
    padding: padding,
    zIndex: zIndex,
    pointerEvents: pointerEvents,
    }"
  >
    <slot/>
  </div>
</template>

<style scoped>
.app_center_frame {
  margin: 0 auto;
  width: 100%;
  min-width: 400px;
  max-width: 700px;
  position: relative;
}

.app_center_frame.noCentering {
  margin: 0;
  min-height: auto;
  max-height: none;
}

.app_center_frame.fullHeight {
  height: 100%;
}

.app_center_frame.relativePosition {
  position: relative;
}

@media (min-width: 1024px) {
  .content {
    max-width: 1280px;
  }
}
</style>