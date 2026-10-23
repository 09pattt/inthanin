<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

interface Props {
  /** สัดส่วนของ Element ที่ต้องเข้า Viewport ก่อนเริ่มทำงาน (0-1) */
  threshold?: number
  /** ขยับจุดเริ่มทำงานของ Viewport ค่าบวกขยายออก ค่าลบหดเข้า เช่น '0px 0px -10% 0px' (top right bottom left) หรือ '20dvh 0px' (vertical horizontal) */
  rootMargin?: string
  /** เล่นครั้งเดียว (true) หรือเล่นซ้ำทุกครั้งที่เลื่อนเข้า-ออก (false) */
  once?: boolean
  /** หน่วงเวลาเริ่ม (มิลลิวินาที) ใช้ทำ Stagger */
  delay?: number
  /** แท็ก HTML ที่ใช้ห่อเนื้อหา */
  tag?: string
  /** กำหนด Opacity เริ่มต้น ตั้งเป็น 1 ถ้าอยากยกเลิก*/
  opacityIn?: number
  /** กำหนด Transform ที่ต้องการ*/
  transformIn?: string
  /** กำหนดเวลา Transition สำหรับทั้งหมด (มิลลิวินาที)*/
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  threshold: 0.2,
  rootMargin: '0px',
  once: false,
  delay: 0,
  tag: 'div',
  opacityIn: 0,
  transformIn: 'none',
  duration: 500,
})

const revealStyle = computed(() => ({
  '--reveal-opacity': String(props.opacityIn),
  '--reveal-transform': props.transformIn,
  '--reveal-duration': `${props.duration}ms`,
  '--reveal-delay': `${props.delay}ms`,
}))

const el = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  // Browser ที่ไม่รองรับ: แสดงเนื้อหาทันที ไม่ให้ค้างซ่อน
  if (!el.value || !('IntersectionObserver' in window)) {
    isVisible.value = true
    return
  }

  observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        if (entry.isIntersecting) {
          isVisible.value = true
          if (props.once) observer?.disconnect()
        } else if (!props.once) {
          isVisible.value = false
        }
      },
      { threshold: props.threshold, rootMargin: props.rootMargin },
  )
  observer.observe(el.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <component
      :is="tag"
      ref="el"
      class="reveal"
      :class="{ 'is-visible': isVisible }"
      :style="revealStyle"
  >
    <slot />
  </component>
</template>

<style scoped>
/* สถานะเริ่มต้น (First form) */
.reveal {
  opacity: var(--reveal-opacity, 0);
  transform: var(--reveal-transform, none);
  transition:
      opacity var(--reveal-duration, 500ms) ease,
      transform var(--reveal-duration, 500ms) ease;
  /* ขาออกไม่หน่วง */
  transition-delay: 0ms;
  will-change: opacity, transform;
}

/* สถานะสุดท้าย (Final form) */
.reveal.is-visible {
  opacity: 1;
  transform: none;
  /* ขาเข้าหน่วงตามค่าที่กำหนด */
  transition-delay: var(--reveal-delay, 0ms);
  will-change: auto;
}

/* ตามการตั้งค่า Accessibility ของผู้ใช้ */
@media (prefers-reduced-motion: reduce) {
  .reveal,
  .reveal.is-visible {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>