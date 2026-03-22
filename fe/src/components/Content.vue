<script setup>
import {useElementsStore} from "@/stores/elements.ts";
import { ref, onMounted } from "vue";

const store = useElementsStore()
const app_content = ref(null)

onMounted(() => {
  store.MainPage = app_content
})
</script>

<template>
  <div ref="app_content" class="app_content">
    <slot/>
  </div>
</template>

<style scoped>
  .app_content {
    width: 100%;
    min-width: fit-content;
    height: 100%;
    min-height: 100dvh;
    background-color: var(--c-main-bg1);
  }
</style>