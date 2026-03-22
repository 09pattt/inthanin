<script setup>
import { useElementsStore} from "@/stores/elements.ts"

const store = useElementsStore()
</script>

<template>
  <div :style="{ height : store.Navbar?.offsetHeight + 'px'}">
    <slot/>
  </div>
</template>