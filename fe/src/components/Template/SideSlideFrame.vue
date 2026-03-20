<script setup>
import CenterFrame from "@/components/Template/CenterFrame.vue";
import { ref, onMounted } from "vue";

defineProps({
  noCenterFrame: Boolean
})

const main_content = ref(null)
const main_content_height = ref(0)

onMounted(() => {
  if (main_content.value) {
    main_content_height.value = main_content.value.offsetHeight
   }
})
</script>

<template>
  <div class="ground">

    <header v-if="noCenterFrame">
      <slot name="header"/>
    </header>
    <header v-else>
      <CenterFrame>
        <slot name="header"/>
      </CenterFrame>
    </header>

    <div class="main_content_cover">
      <main v-if="noCenterFrame">
        <slot/>
      </main>
      <main v-else>
          <div ref="main_content" style="width: 100%; height:fit-content; overflow-x: scroll; overflow-y: hidden; position: absolute; inset: 0;">
            <slot/>
          </div>
      </main>
    </div>

  </div>
</template>

<style scoped>
.ground {
  width: 100%;
  height: fit-content;
}

header {
  width: 100%;
  height: fit-content;
}

.main_content_cover {
  width: 100%;
  height: fit-content;
  background-color: var(--c-main-bg2);
  filter: drop-shadow(0 var(--space-2) var(--space-2) var(--c-t3-bl1));

  padding: var(--space-1);
}

main {
  width: 100%;
  height: v-bind(main_content_height + 'px');
  position: relative;
}
</style>