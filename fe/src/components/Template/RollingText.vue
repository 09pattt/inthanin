<script setup lang="ts">
import { computed } from "vue";
import ContentFrame from "@/components/Template/ContentFrame.vue";
import Reveal from "@/components/Property/Reveal.vue";

interface Props {
  text: string;
  color?: string;
  size?: string;
  gap?: string;
  rootMargin?: string;
  transformIn?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: "var(--c-p2)",
  size: "5rem",
  gap: "1rem",
  rootMargin: "-150px 0px",
  transformIn: "scale(0.8)",
});

const characters = computed<string[]>(() => Array.from(props.text.trim()));
</script>

<template>
  <div
      class="rolling_text"
      role="img"
      :aria-label="text"
      :style="{ '--rt-color': color, '--rt-size': size, '--rt-gap': gap }"
  >
    <ContentFrame>
      <template v-for="(char, i) in characters" :key="i">
        <div v-if="char.trim() === ''" class="space" aria-hidden="true"></div>
        <Reveal
            v-else
            :root-margin="rootMargin"
            :transform-in="transformIn"
            aria-hidden="true"
        >
          <div class="center-text letter">{{ char }}</div>
          <div class="letter-gap"></div>
        </Reveal>
      </template>
    </ContentFrame>
  </div>
</template>

<style scoped>
.letter {
  color: var(--rt-color);
  font-size: var(--rt-size);
}
.letter-gap,
.space {
  height: var(--rt-gap);
}
</style>