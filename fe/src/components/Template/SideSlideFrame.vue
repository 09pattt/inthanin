<script setup>
import ContentFrame from "@/components/Template/ContentFrame.vue";

defineProps({
  padding_header: {
    type: String,
    default: "var(--space-1)",
  },
  padding_main: {
    type: String,
    default: "var(--space-1)",
  },
})

</script>

<template>
  <div class="side_slide_frame">

    <header>
      <ContentFrame :padding="padding_header">
        <slot name="header"/>
      </ContentFrame>
    </header>

    <div class="component__main_space">
      <div class="component__main_scroll_space">
        <ContentFrame :padding="padding_main">
          <main class="component__main_wrapper">
            <slot/>
          </main>
        </ContentFrame>
      </div>
    </div>

  </div>
</template>

<style scoped>
.side_slide_frame {
  width: 100%;
  height: fit-content;
}

.side_slide_frame > header {
  width: 100%;
  height: fit-content;
}

.side_slide_frame .component__main_space {
  width: 100%;
  height: fit-content;
  background-color: var(--c-main-bg2);
  filter: drop-shadow(0 var(--space-2) var(--space-2) var(--c-t3-bl1));
}

.side_slide_frame .component__main_scroll_space {
  width: 100%;
  height: fit-content;
  overflow-x: scroll;
  overflow-y: hidden;
}

.side_slide_frame .component__main_wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: var(--space-1);
  flex-wrap: nowrap;
  align-items: flex-start;
}

</style>
